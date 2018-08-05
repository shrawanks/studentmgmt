import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

	students:any

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  	this.adminService.getStudents().subscribe(data=>{
  		this.students = data['data'];
  	})
  }

}
