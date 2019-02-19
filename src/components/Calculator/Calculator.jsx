import React from 'react';
import classes from './Calculator.module.css';
import CompoundInvestmentGrowth from '../../helpers/CompoundInvestmentGrowth';

class Calculator extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentTax: 0.0,
            futureTax: 0.0,
            principal: 0.0,
            years: 0,
            returnRate: 6.6,
            inflation: 1.9     
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    }

    inputChangeHandler (event) {
        const name = event.target.name;
        const value = event.target.value;
        let newState = {...this.state};
        newState[name] = value;
        this.setState({
            ...newState
        });
    };

    render () {
        const rrsp = new CompoundInvestmentGrowth(this.state.principal, this.state.years, this.state.returnRate, this.state.inflation, this.state.currentTax, this.state.futureTax);
        const tfsa = new CompoundInvestmentGrowth(this.state.principal, this.state.years, this.state.returnRate, this.state.inflation, 0, 0);
        console.log(rrsp)

       return ( 
           <div>
               <div className={classes.CalculatorInputs}>
                <h2>Retirement savings calculator</h2>
                <label htmlFor="currentTax">What is your current marginal tax rate, represented as a percentage? <br/>This is also known as your tax bracket. Remember to combine provincial and federal taxes.</label>
                <input 
                    type="number" 
                    name="currentTax"
                    step=".01"
                    onChange={this.inputChangeHandler}
                    value={this.state.currentTax}/>

                <label htmlFor="futureTax">What is your anticipated future tax rate? <br/> This is the marginal tax rate, or tax bracket that you anticipate paying at the time that you start withdrawing your savings.</label>
                <input 
                    type="number" 
                    name="futureTax"
                    step=".01"
                    onChange={this.inputChangeHandler}
                    value={this.state.futureTax}/>

                <label htmlFor="principal">What amount are you planning on investing? <br/> Input this as an after tax number, we'll do the calculation for your taxes, and add it to the total if necessary!</label>
                <input 
                    type="number" 
                    name="principal"
                    
                    onChange={this.inputChangeHandler}
                    value={this.state.principal}/>
                
                <label htmlFor="years">How long will you give your money to grow? <br/> Just tell us how many years until you plan on withdrawing from your account</label>
                <input 
                    type="number" 
                    name="years"
                    onChange={this.inputChangeHandler}
                    value={this.state.years}/>

                <label htmlFor="returnRate">What is the anticipated yearly return rate for your investments as a percentage? <br/> The default we've provided is the 20 year average for the S&P/TSX composite</label>
                <input 
                    type="number" 
                    step= ".01"
                    name="returnRate"
                    onChange={this.inputChangeHandler}
                    value={this.state.returnRate}/>

                <label htmlFor="inflation">What is the anticipated inflation rate until you start withdrawing funds? <br/> The default we've provided is the 20 year average for the Canadian CPI</label>
                <input 
                    type="number" 
                    step= ".01"
                    name="inflation"
                    onChange={this.inputChangeHandler}
                    value={this.state.inflation}/>
            </div>

            <div className={classes.Returns}>
                <div className={classes.Account}>
                    <h2>RRSP returns</h2>
                    <p>Deposited ammount: ${rrsp.principal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    <p>Real future value (adjusted for inflation): ${rrsp.futureValue().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    <p>Tax to be paid on withdrawal: ${rrsp.taxPaid().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    <p>Real future value after taxes: ${rrsp.afterTaxFutureValue().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                </div>
                <div className={classes.Account}>
                    <h2>TFSA returns</h2>
                    <p>Deposited ammount: {tfsa.principal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    <p>Real future value (adjusted for inflation): {tfsa.futureValue().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    <p>note: since taxes are paid on TFSA accounts before investment, no tax is due on withdrawal</p>
                </div>
            </div>
           </div>
            
       )
    };
};

export default Calculator;