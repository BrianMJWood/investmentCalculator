import { Component, computed, inject, input } from '@angular/core';
import { AppService } from '../app.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private AppService: AppService = inject(AppService);

  investmentData = computed(() => this.AppService.annualData());
}
