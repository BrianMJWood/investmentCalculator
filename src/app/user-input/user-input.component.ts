import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  private AppService: AppService = inject(AppService);

  investmentData: any = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };

  submitData = output<any>();

  calculateInvestment() {
    this.AppService.calculateInvestmentResults(this.investmentData);
  }
}
