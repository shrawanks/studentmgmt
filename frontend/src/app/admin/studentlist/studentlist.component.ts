import { Component, OnInit } from '@angular/core';
import {StudentsService } from './students.service';
import { User} from '../../user/user';
declare var $:any;

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

	students: any = [];
  user = <User> {} || [];
  formshow=false;
 //  // student:any
  error:string;

  constructor(private StudentsService: StudentsService) { }

  ngOnInit() {
  this.fetchStudent();
  }

  showform(){
    this.formshow=true;
  }

  fetchStudent(){
      this.StudentsService.getStudents()
      .subscribe(response=>{
        console.log(response);

        this.students = response.data; 
         
      })
  }

  addStudent(){
    // alert();
    // debugger;
    // this.students=this.user;
    // this.students.push(this.user);
    // this.students.push(this.user);
    // console.log(this.students);
   
      this.students.push(this.user);
       this.formshow=false;
    $('#addStudentForm').modal('hide');
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

}
