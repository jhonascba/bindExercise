import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  eventNumbers: number[] = [];

  onIntervalFired(firedNumber: number): number {
    if (firedNumber % 2 === 0) {
      return this.eventNumbers.push(firedNumber);
    }
    return this.oddNumbers.push(firedNumber);
  }
}
