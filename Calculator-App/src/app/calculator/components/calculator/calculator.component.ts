import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorComponent {

  private calculatorService = inject(CalculatorService);

  public calculatorBtns = viewChildren(CalculatorButtonComponent);

  public resultText    = computed(() => this.calculatorService.resultText());
  public lastOperator  = computed(() => this.calculatorService.lastOperator());
  public subResultText = computed(() => this.calculatorService.subResultText());

  public handleClick(key: string) {
    this.calculatorService.constructNumber(key);
  }

  public handleKeyboardEvent(event: KeyboardEvent) {
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      x: '*',
      X: '*',
      '/': '÷',
      Enter: '=',
    };

    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorBtns().forEach((button) => {
      button.keyBoardPressedStyle(keyValue);
    });
  }
}
