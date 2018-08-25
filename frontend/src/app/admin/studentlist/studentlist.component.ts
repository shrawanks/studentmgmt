import { Component, OnInit, HostBinding } from '@angular/core';
import { StudentsService } from './students.service';
import { moveIn, fallIn } from '../../router.animations';
import { Student } from './student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
  animations: [moveIn(), fallIn()],
})
export class StudentlistComponent implements OnInit {
  @HostBinding('@moveIn')
  students: any = [];
  formshow = false;
  msg: string;
  student: Student = <Student>{};
  editFid;
  editId;
  editMode;
  success;
  submitted;
  filterhValue;
  deleteMode: boolean;
  delId: any;
  delFid: any;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    if (!this.studentsService.students) {
      this.studentsService.getStudents().subscribe(
        response => {
          this.students = response['data'];
          console.log(this.students);
        },
        error => {
          this.msg = "Can't get the data right now.";
        }
      );
    } else {
      this.students = this.studentsService.students;
    }
  }

  showform() {
    this.formshow = true;
  }

  check(event) {
    console.log(event);
  }

  addStudent(close, event) {
    console.log(event)
    close.click();
    // this.StudentsService.addStudent(this.user)
    // .subscribe(response => {
    //   this.students.push(this.user)
    // }, error =>{
    //   this.error = "Sorry could not add a student right now."
    // })


    // if (formData.valid){
    // this.student = {
    //     "name": "morpheus",
    //     "job": "leader
    // }
    // this.students.push(this.user);
    // this.StudentsService.addStudent(this.student).subscribe(response => {
    //   this.students.push(this.student)
    // }, error =>{
    //   this.error = "Sorry could not add a student right now."
    // })

    // }
  }

  deleteStudent(decision) {
    if (decision === 1) {
      this.studentsService.deleteStudent(this.delId)
        .subscribe(response => {
          console.log(response);
          this.students.splice(this.delFid, 1);
          this.success = response['message'];
          this.deleteMode = false;
        }, error => {
          this.deleteMode = false;
          console.log(error);
        });
    } else {
      this.deleteMode = false;
    }
  }

  editStudent(id, fid) {
    this.showform();
    this.student = this.students[fid];
    this.editMode = true;
    this.editId = id;
    this.editFid = fid;
  }

  updateStudent(close) {
    close.click();
    this.studentsService.updateStudent(this.editId, this.student)
      .subscribe(response => {
        console.log(response);
        this.studentsService[this.editFid] = this.student;
        this.success = response['message'];
        this.editMode = false;
        this.submitted = false;
      }, error => {
        console.log(error);
        this.submitted = false;
        this.editMode = false;
      });
  }

  getDelete(id, fid) {
    this.deleteMode = true;
    this.delId = id;
    this.delFid = fid;
  }

}
