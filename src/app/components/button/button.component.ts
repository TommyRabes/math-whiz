import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Size, castSize } from '../../constants/ui/size';
import { ButtonVariant, EdgeVariant, castButtonVariant, castEdgeVariant } from '../../constants/ui/variants';

@Component({
  selector: 'maw-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({ transform: castSize }) protected size: Size = Size.s;
  @Input({ transform: castButtonVariant }) protected variant: ButtonVariant = ButtonVariant.fill;
  @Input({ transform: castEdgeVariant }) protected edge: EdgeVariant = EdgeVariant.sharp;

}
