import {Component, inject} from '@angular/core';
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-investment-result',
  standalone: false,
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService)

  get results() {
    return this.investmentService.resultData
  }

  trackByYear(_index: number, result: any): number {
    return result.year;
  }
}
