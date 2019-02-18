export default class CompoundInvestmentGrowth {
    constructor (principal, years, returnRate, inflationRate, currentTax, futureTax) {
        this.principal = principal;
        this.years = years;
        this.returnRate = (returnRate / 100.0);
        this.inflationRate = (inflationRate / 100.0);
    }

    futureValue () {  
        let total =  this.principal * Math.pow(1 + this.realReturnRate()/1, this.years);

        return Number(Math.round(total + 'e2')+'e-2');
    }

    realReturnRate () {
        return (this.returnRate - this.inflationRate) / (this.inflationRate + 1.0)
    }

    afterTaxFutureValue() {

    }

}
