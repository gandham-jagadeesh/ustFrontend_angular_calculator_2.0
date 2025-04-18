import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component'; // Import the component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculatorComponent], // Add CalculatorComponent to imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Your component code
}
