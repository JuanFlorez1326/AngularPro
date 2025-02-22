import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  styleUrl: './calculator-button.component.css',
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'border-r border-b border-indigo-400',
    '[class.w-1/4]': '!isDoubleSize()',
    '[class.w-2/4]': 'isDoubleSize()'
  }
})
export class CalculatorButtonComponent {

  public isPressed = signal(false);
  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('btn');

  public handleClick() {
    if(!this.contentValue()?.nativeElement) return;
    const key = this.contentValue()!.nativeElement.innerText;
    this.onClick.emit(key.trim());
  }

  public keyBoardPressedStyle(key: string){
    if(!this.contentValue()) return;
    const value = this.contentValue()!.nativeElement.innerText;
    if(value !== key) return;
    this.isPressed.set(true);
    setTimeout(() => this.isPressed.set(false), 100);
  }

  public isCommand = input(false, {
    transform: ( value: boolean | string ) =>
      typeof value === 'string' ? value === '' : value
  });

  public isDoubleSize = input(false, {
    transform: ( value: boolean | string ) =>
      typeof value === 'string' ? value === '' : value
  });
}
