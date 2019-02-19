import React from 'react';
import classes from './Calculator.module.css';
import CompoundInvestmentGrowth from '../../helpers/CompoundInvestmentGrowth';

class Calculator extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentTax: 15,
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

        const currencyHelper = (number) => <b>${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b>
        

       return ( 
           <div>
               <div className={classes.CalculatorInputs}>
                <h2>Retirement savings calculator</h2>
                <label htmlFor="currentTax"> <b>What is your tax bracket based on total income?</b> <p> This is also known as your marginal tax rate.</p></label>
                <select 
                    name="currentTax"
                    onChange={this.inputChangeHandler}>
                        <option value={15}>15% ($0-$45,282)</option>
                        <option value={20.5}>20.5% ($45,282-$90,563)</option>
                        <option value={26}>26% ($90,563-$140,388)</option>
                        <option value={29}>26% ($140,388-$200,000)</option>
                        <option value={33}>26% ($200,000+)</option>
                    </select>

                <label htmlFor="futureTax"><b> What is your anticipated future tax bracket based on retirement income?</b></label>
                <select 
                    name="futureTax"
                    onChange={this.inputChangeHandler}>
                        <option value={15}>15% ($0-$45,282)</option>
                        <option value={20.5}>20.5% ($45,282-$90,563)</option>
                        <option value={26}>26% ($90,563-$140,388)</option>
                        <option value={29}>26% ($140,388-$200,000)</option>
                        <option value={33}>26% ($200,000+)</option>
                    </select>

                <label htmlFor="principal"> <b>What amount are you planning on investing?</b><p>Input this as an after tax number, we'll do the calculation for your taxes, and add the taxes back to the RRSP!</p></label>
                <input 
                    type="number" 
                    name="principal"
                    onChange={this.inputChangeHandler}
                    value={this.state.principal}/>
                
                <label htmlFor="years"><b>How many years will you give your money to grow?</b></label>
                <input 
                    type="number" 
                    name="years"
                    onChange={this.inputChangeHandler}
                    value={this.state.years}/>

                <label htmlFor="returnRate"> <b>What is the anticipated yearly return rate for your investments as a percentage?</b><p>The default we've provided is the 20 year average for the S&P/TSX composite</p></label>
                <input 
                    type="number" 
                    name="returnRate"
                    onChange={this.inputChangeHandler}
                    value={this.state.returnRate}/>

                <label htmlFor="inflation"> <b>What is the anticipated inflation rate until you start withdrawing funds?</b><p>The default we've provided is the 20 year average for the Canadian CPI</p></label>
                <input 
                    type="number" 
                    name="inflation"
                    onChange={this.inputChangeHandler}
                    value={this.state.inflation}/>
            </div>

            <div className={classes.Returns}>
                <div className={classes.Account}>
                    <h2>RRSP returns</h2>
                    <p>Starting amount (this was adjusted to include your tax refund): {currencyHelper(rrsp.principal)}</p>
                    <p>Future value after inflation: {currencyHelper(rrsp.futureValue())}</p>
                    <p>Tax owing on withdrawal: {currencyHelper(rrsp.taxPaid())}</p>
                    <p>Future value after taxes and inflation: ${currencyHelper(rrsp.afterTaxFutureValue())}</p>
                </div>
                <div className={classes.Account}>
                    <h2>TFSA returns</h2>
                    <p>Deposited ammount: {currencyHelper(tfsa.principal)}</p>
                    <p>Future value after inflation: {currencyHelper(tfsa.futureValue())}</p>
                    <p>note: since taxes are paid on TFSA accounts before investment, no tax is due on withdrawal</p>
                </div>
            </div>
           </div>
            
       )
    };
};

export default Calculator;