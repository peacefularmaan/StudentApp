import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      name: 'Armaan Pandey',
      classLevel: '9',
      gender: 'Male',
      hasHobby: true,
      hobby: 'Football',
      favoriteSubject: 'Physics'
    },
    {
      name: 'Ahaana Pandey',
      classLevel: '6',
      gender: 'Female',
      hasHobby: false,
      favoriteSubject: 'Mathematics'
    }
  ];

  getStudents(): Student[] {
    return [...this.students];
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }
}

