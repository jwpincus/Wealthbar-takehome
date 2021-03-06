import CompoundInvestmentGrowth from './CompoundInvestmentGrowth';

const PRINCIPAL = 1000.0;
const YEARS = 20;
const RATE = 5;
const INFLATION = 0;
const CURRENT_TAX = 0
const FUTURE_TAX = 20
const growth = new CompoundInvestmentGrowth(PRINCIPAL, YEARS, RATE, INFLATION, CURRENT_TAX, FUTURE_TAX)

test('Test that jest works', () => {
    expect(1).toBe(1);
})

test('should correctly return simple compound interest', () => {
    expect(growth.futureValue()).toBe(2653.30);
})

test('should correctly calculate real interest rate', () => {
  expect(growth.realReturnRate()).toBe(0.05);
  growth.inflationRate = 0.02;
  expect(growth.realReturnRate()).toBe(.029411764705882356);
  growth.inflationRate = 0;
})

test('should correctly calculate future value with inflation', () => {
  growth.inflationRate = 0.02;
  expect(growth.futureValue()).toBe(1785.59);
  growth.inflationRate = 0;
})

test('should correctly correct principal for current tax rate', () => {
    growth.currentTax = 0.3;
    growth.taxAdjustPrincipal();
    expect(growth.principal).toBe(1428.5714285714287);
    growth.currentTax = 0;
    growth.principal = 1000;
})

test('should correctly return aftertax future value', () => {
  expect(growth.afterTaxFutureValue()).toBe(2122.64)
})
