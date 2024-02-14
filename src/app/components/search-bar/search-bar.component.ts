import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TextFieldComponent } from '../text-field/text-field.component';
import { castSize, Size } from '../../constants/ui/size';
import { castEdgeVariant, EdgeVariant } from '../../constants/ui/variants';

const COMPONENTS = [TextFieldComponent, ButtonComponent];

@Component({
  selector: 'maw-search-bar',
  standalone: true,
  imports: [CommonModule, ...COMPONENTS],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Input({ transform: castSize }) protected size: Size = Size.s;
  @Input({ transform: castEdgeVariant }) protected edge: EdgeVariant = EdgeVariant.sharp;
}
