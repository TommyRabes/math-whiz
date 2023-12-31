import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { ButtonComponent } from './components/button/button.component';

const COMPONENTS = [NavbarComponent, NavButtonComponent, ButtonComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ...COMPONENTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'math-whiz';
}
