import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudentComponent implements OnInit {

  studentForm!: FormGroup;
  classes: string[] = ['6', '7', '8', '9'];
  subjects: string[] = ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Science'];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      classLevel: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favoriteSubject: ['']
    });


    this.studentForm.get('hasHobby')?.valueChanges.subscribe(checked => {
      const hobbyControl = this.studentForm.get('hobby');

      if (checked) {
        hobbyControl?.addValidators(Validators.required);
      } else {
        hobbyControl?.removeValidators(Validators.required);
        hobbyControl?.setValue('');
      }

      hobbyControl?.updateValueAndValidity();
    });
  }

  get name() {
    return this.studentForm.get('name');
  }

  get classLevel() {
    return this.studentForm.get('classLevel');
  }

  get gender() {
    return this.studentForm.get('gender');
  }

  get hasHobby() {
    return this.studentForm.get('hasHobby')?.value;
  }

  get classMessage(): string | null {
    const cls = this.classLevel?.value;
    if (!cls) return null;

    if (cls === '9') {
      return 'You will appear in board exams soon. All the Best !!';
    } else if (cls === '6') {
      return 'Welcome to middle school!';
    } else {
      return 'Education and hobby go hand in hand!';
    }
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const formValue = this.studentForm.value;

    const newStudent = {
      name: formValue.name,
      classLevel: formValue.classLevel,
      gender: formValue.gender,
      hasHobby: formValue.hasHobby,
      hobby: formValue.hasHobby ? formValue.hobby : undefined,
      favoriteSubject: formValue.favoriteSubject
    };

    this.studentService.addStudent(newStudent);
    this.router.navigate(['/home']);
  }
}


