import { Injectable, signal } from '@angular/core';
import { Investment } from './investmentType';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  annualData = signal<any>(undefined);

  calculateInvestmentResults(investment: Investment) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      investment;
    console.log(investment);
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualData.set(annualData);
  }
}
