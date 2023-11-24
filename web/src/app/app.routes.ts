import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseExplorerComponent } from './pages/course-explorer/course-explorer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'courses',
        component: CourseExplorerComponent
    }
];
