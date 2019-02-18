export default class CompoundInvestmentGrowth {
    constructor (principal, years, returnRate, inflationRate, currentTax, futureTax) {
        this.principal = principal;
        this.years = years;
        this.returnRate = (returnRate / 100.0);
        this.inflationRate = (inflationRate / 100.0);
        this.currentTax = (currentTax / 100);
        this.futureTax = (futureTax / 100);
        this.taxAdjustPrincipal()
    }

    futureValue () {  
        let total =  this.principal * Math.pow(1 + this.realReturnRate()/1, this.years);

        return Number(Math.round(total + 'e2')+'e-2');
    }

    realReturnRate () {
        return (this.returnRate - this.inflationRate) / (this.inflationRate + 1.0)
    }

    afterTaxFutureValue () {
        let total = this.futureValue() * (1 - this.futureTax)
        return Number(Math.round(total + 'e2')+'e-2');
    }

    taxAdjustPrincipal () {
        this.principal = (this.principal / (1 - this.currentTax))
    }

}
