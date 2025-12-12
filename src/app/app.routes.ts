import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list';
import { AddStudentComponent } from './components/add-student/add-student';

export const routes: Routes = [
  { path: 'home', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
