import { Component, OnInit, HostBinding } from '@angular/core'
import {StudentsService } from './students.service'
import { User} from '../../user/user'
import { moveIn, fallIn } from '../../router.animations'
import { Router } from '@angular/router'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
  animations: [moveIn(), fallIn()],
})
export class StudentlistComponent implements OnInit {
  @HostBinding('@moveIn')
	students: any = []
  user = <User> {} || []
  formshow = false
  msg: string
  // student:any
  //  error:string;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents() {
    this.studentsService.getStudents().subscribe(
      response => {
        this.students = response
      }
    )
  }

  showform() {
    this.formshow = true
  }

  addStudent() {
    // alert();
    // debugger;
    // this.students=this.user;
    // this.students.push(this.user);
    this.students.push(this.user)
    console.log(this.students)

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

}
