import { Component, OnInit } from '@angular/core'
import {StudentsService } from './students.service'
import { User} from '../../user/user'
import { moveIn, fallIn } from '../../router.animations'
import { Router } from '@angular/router'
 
 declare var $:any;

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class StudentlistComponent implements OnInit {

	students: any = []
  user = <User> {} || []
  formshow = false
 //  // student:any
  error:string;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
 
  this.fetchStudent();
 
  }

  showform() {
    this.formshow = true
  }

 
  fetchStudent(){
      this.studentsService.getStudents()
      .subscribe(response=>{
        console.log(response);

        this.students = response['data']; 
         
      })
  }

  addStudent(){
 
    // alert();
    // debugger;
    // this.students=this.user;
    // this.students.push(this.user);
 
    // this.students.push(this.user);
    // console.log(this.students);
   
      // this.students.push(this.user);

    $('#addStudentForm').modal('hide');
      this.studentsService.addStudent(this.user)
      .subscribe(response => {
        console.log(response);
        this.students.push(this.user)
      }, error =>{
        this.error = "Sorry could not add a student right now."
      })
      this.formshow=false;

 
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
