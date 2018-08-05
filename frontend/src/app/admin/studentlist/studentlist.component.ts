import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

	students:any
  student:any
  error:string

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  	this.adminService.getStudents().subscribe(data=>{
  		this.students = data['data'];
  	})
  }

  addStudent(){
    // if (formData.valid){
      this.student = {
          "name": "morpheus",
          "job": "leader"
      }
      this.adminService.addStudent(this.student).subscribe(data => {
        this.students.push(this.student)
      }, error =>{
        this.error = "Sorry could not add a student right now."
      })

    // }
  }

}
