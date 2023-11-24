import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { CardContentComponent } from '../../components/card/card-content/card-content.component';
import { CardActionsComponent } from '../../components/card/card-actions/card-actions.component';
import { RouterLink } from '@angular/router';

const COMPONENTS = [ButtonComponent, CardComponent, CardContentComponent, CardActionsComponent];

@Component({
  selector: 'maw-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ...COMPONENTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
