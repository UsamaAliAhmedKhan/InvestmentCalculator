import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  private investmentResult = inject(InvestmentService);

  enteredInitialInvestment = '';
  enteredAnnualInvestment = '';
  enteredExpectedReturn = '';
  enteredDuration = '';

  onSubmit(){
    this.investmentResult.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn
    })
    this.enteredInitialInvestment = '';
    this.enteredAnnualInvestment = '';
    this.enteredExpectedReturn = '';
    this.enteredDuration = '';
    }

}
