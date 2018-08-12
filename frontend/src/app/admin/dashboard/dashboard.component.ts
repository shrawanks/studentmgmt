import { Component, OnInit, HostBinding } from '@angular/core';

import { ReportService } from '../report/report.service';
import { moveIn, fallIn } from '../../router.animations';
import { StudentsService } from '../studentlist/students.service';
import { SubjectService } from '../subjectlist/subject.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	animations: [moveIn(), fallIn()]
})

export class DashboardComponent implements OnInit {
	@HostBinding('@moveIn')
	students;
	subjectList;
	subMsg: string;
	stuMsg: string;
	constructor(private report: ReportService, private subjectService: SubjectService, private studentService: StudentsService) { }

	ngOnInit() {
		this.getSubject();
		this.getStudents();
	}

	getSubject() {
		if (!this.subjectService.subjectList) {
			this.subjectService.getSubject()
				.subscribe(response => {
					console.log(response);
					this.subjectService.subjectList = response['data'];
					this.subjectList = response['data'];
				}, error => {
					this.subMsg = "Can't fetch the data right now.";
				});
		} else {
			this.subjectList = this.subjectService.subjectList;
		}
	}


	red() {

	}

	getStudents() {
		if (!this.studentService.students) {
			this.studentService.getStudents()
				.subscribe(response => {
					console.log(response);
					this.studentService.students = response['data'];
					this.students = response['data'];
				}, error => {
					this.stuMsg = "Can't fetch the data right now.";
				});
		} else {
			this.students = this.studentService.students;
		}
	}

}
