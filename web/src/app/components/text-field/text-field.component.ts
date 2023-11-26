import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Size, castSize } from '../../constants/ui/size';
import { EdgeVariant, TextFieldVariant, castEdgeVariant, castTextFieldVariant } from '../../constants/ui/variants';

@Component({
  selector: 'maw-text-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {

  @Input({ transform: castSize }) protected size: Size = Size.s;
  @Input({ transform: castTextFieldVariant }) protected variant: TextFieldVariant = TextFieldVariant.outlined;
  @Input({ transform: castEdgeVariant }) protected edge: EdgeVariant = EdgeVariant.sharp;

  @Input() public placeholder: string = '';
}
