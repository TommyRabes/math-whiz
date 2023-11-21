import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';

const COMPONENTS = [ButtonComponent];

@Component({
  selector: 'maw-home',
  standalone: true,
  imports: [CommonModule, ...COMPONENTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
