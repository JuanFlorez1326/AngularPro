import { Injectable, signal } from '@angular/core';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/', '÷'];
const specialOperators = ['+/-', '%', '.', '=', 'C', 'Backspace'];

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public resultText    = signal('0');
  public subResultText = signal('0');
  public lastOperator  = signal('+');

  public constructNumber(value: string): void {

    if(![...numbers, ...operators, ...specialOperators].includes(value)) {
      console.log('Invalid Input', value);
      return;
    }

    //Operation
    if(value === '=') {
      this.calculateResult();
      return;
    }

    //Clean
    if(value === 'C') {
      this.resultText.set('0');
      this.subResultText.set('0');
      this.lastOperator.set('+');
      return;
    }

    //Backspace
    if(value === 'Backspace') {
      if(this.resultText() === '0') return;

      if(this.resultText().includes('-') && this.resultText().length === 2){
        this.resultText.set('0');
        return;
      }

      if(this.resultText().length === 1) {
        this.resultText.set('0');
        return;
      }

      this.resultText.update(v => v.slice(0, -1))
      return;
    }

    //Apply Operator
    if(operators.includes(value)) {
      // this.calculateResult();

      this.lastOperator.set(value);
      this.subResultText.set(this.resultText());
      this.resultText.set('0');
      return;
    }

    //Limit Characters
    if(this.resultText().length >= 10) {
      console.log('Max length reached');
      return;
    }

    //Validate Point Decimal
    if( value === '.' && !this.resultText().includes('.')) {
      if(this.resultText() === '0' || this.resultText() === '') {
        this.resultText.set('0.');
        return;
      }
      this.resultText.update(txt => txt + '.');
      return;
    }

    //Change Sign
    if (value === '+/-') {
      if(this.resultText().includes('-')) {
        this.resultText.update( txt => txt.slice(1));
        return;
      }
      this.resultText.update(txt => '-' + txt);
      return;
    }

    //Handling Initial Zero
    if(value === '0' && (this.resultText() === '0' || this.resultText() === '-0')) {
      return;
    }

    //Number
    if(numbers.includes(value)) {

      if(this.resultText() === '0') {
        this.resultText.set(value);
        return;
      }

      if(this.resultText() === '-0') {
        this.resultText.set('-' + value);
        return;
      }

      this.resultText.update(txt => txt + value);
      return;
    }

  }

  public calculateResult() {
    const number1 = parseFloat(this.subResultText());
    const number2 = parseFloat(this.resultText());

    let result = 0;

    switch (this.lastOperator()) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      case '÷':
        result = number1 / number2;
        break;
    }

    this.resultText.set(result.toString());
    this.subResultText.set('0');
  }
}
