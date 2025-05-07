export interface CalculateInvestmentData {
  initialInvestment: number,
  duration: number,
  expectedReturn: number,
  annualInvestment: number,
}

export interface CalculateInvestmentResult{
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}
