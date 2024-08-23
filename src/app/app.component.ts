import { Component } from '@angular/core';
import { MaterialDemoComponent } from './material-demo/material-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MaterialDemoComponent], // Import the standalone component here
})
export class AppComponent {}
