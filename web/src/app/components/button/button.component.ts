import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Size, parseSize } from '../../constants/ui/size';

@Component({
  selector: 'maw-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({ transform: parseSize }) protected size: Size = Size.M;

}
