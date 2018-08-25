import { Component, OnInit, HostBinding } from '@angular/core';
import { SubjectService } from './subject.service';
import { Subject } from './subject';
import { moveIn, fallIn } from '../../router.animations';


@Component({
	selector: 'app-subjectlist',
	templateUrl: './subjectlist.component.html',
	styleUrls: ['./subjectlist.component.scss'],
	animations: [moveIn(), fallIn()]
})

export class SubjectlistComponent implements OnInit {
	@HostBinding('@moveIn')
	subjectList: any = [{ "name": "science" }];
	showSubject: boolean;
	subject: Subject = <Subject>{};
	editMode = false;
	editId;
	editFid;
	deleteMode = false;
	delId: any;
	delFid: any;
	success: any;
	msg: string;
	submitted = false;
	filterValue: string;

	constructor(private subjectService: SubjectService) { }

	ngOnInit() {
		this.getSubject();
	}

	getSubject() {
		if (!this.subjectService.subjectList || this.subjectService.subjectList.length < 1) {
			this.subjectService.getSubject()
				.subscribe(response => {
					console.log(response);
					if (response['data'].length === 0) {
						this.msg = "No Subjects added yet";
					} else {
						this.subjectService.subjectList = response['data'];
						this.subjectList = response['data'];
					}
				}, error => {
					this.msg = "Can't fetch the data right now.";
				});
		} else {
			this.subjectList = this.subjectService.subjectList;
		}
	}

	showSubjectForm() {
		this.showSubject = true;
	}

	closeForm() {
		this.showSubject = false;
		this.editMode = false;
		this.subject = new Subject;
	}

	submitSubject(form) {
		this.submitted = true;
		console.log(form.valid);
		if (form.valid) {
			this.subjectService.postSubject(this.subject)
				.subscribe(responese => {
					console.log(responese);
					this.subjectList.push(responese['data']);
					this.closeForm();
					this.submitted = false;
				}, error => {
					console.log(error);
					this.submitted = false;
				});
		}
	}

	deleteSubject(decision) {
		if (decision === 1) {
			this.subjectService.deleteSubject(this.delId)
				.subscribe(response => {
					console.log(response);
					this.subjectList.splice(this.delFid, 1);
					this.success = response['message'];
					this.deleteMode = false;
				}, error => {
					console.log(error);
					this.deleteMode = false;
				});
		} else {
			this.deleteMode = false;
		}

	}

	editSubject(id, fid) {
		this.showSubjectForm();
		this.subject = this.subjectList[fid];
		this.editMode = true;
		this.editId = id;
		this.editFid = fid;
	}

	updateSubject() {
		this.subjectService.updateSubject(this.editId, this.subject)
			.subscribe(response => {
				this.subjectList[this.editFid] = this.subject;
				this.success = response['message'];
				this.editMode = false;
				this.submitted = false;
				this.closeForm();
			}, error => {
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
