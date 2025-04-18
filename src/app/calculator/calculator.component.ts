import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule here
import { evaluate } from 'mathjs';
@Component({
  selector: 'app-calculator',
  standalone: true,  // Important: standalone component
  imports: [CommonModule, FormsModule],  // Import FormsModule here
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  keys = [
    { label: '7' }, { label: '8' }, { label: '9' }, { label: '/', type: 'op' },
    { label: '4' }, { label: '5' }, { label: '6' }, { label: '*', type: 'op' },
    { label: '1' }, { label: '2' }, { label: '3' }, { label: '-', type: 'op' },
    { label: '0' }, { label: '.' }, { label: '(', type: 'op' }, { label: ')', type: 'op' },
    { label: '%', type: 'op' }, { label: '+', type: 'op' }
  ];
  
  display: string = '';
  error: string = '';

  pressKey(key: string) {
    this.display += key;
  }

  clear() {
    this.display = '';
    this.error = '';
  }

  calculate() {
    try {
      // Expression validation
      if (!/^[0-9+\-*/().% ]+$/.test(this.display)) {
        this.error = 'Invalid characters in expression';
        return;
      }

      // Evaluate expression
      // Note: Using 'new Function' is dangerous, consider using a math parser in production
      this.display = evaluate(this.display).toString() || '0';
      this.error = '';
    } catch (e) {
      this.error = 'Invalid expression';
      this.display = '';
    }
  }
}
