import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

const COMPONENTS = [SearchBarComponent];

@Component({
  selector: 'maw-course-explorer',
  standalone: true,
  imports: [CommonModule, ...COMPONENTS],
  templateUrl: './course-explorer.component.html',
  styleUrl: './course-explorer.component.scss'
})
export class CourseExplorerComponent {

}
