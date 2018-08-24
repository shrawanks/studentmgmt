import { Component, OnInit } from '@angular/core'
import { SubjectService } from './subject.service'
import { Subject } from './subject'
import { Router } from '@angular/router'
import { moveIn, fallIn } from '../../router.animations'


@Component({
	selector: 'app-subjectlist',
	templateUrl: './subjectlist.component.html',
	styleUrls: ['./subjectlist.component.scss'],
	animations: [moveIn(), fallIn()],
	// tslint:disable-next-line:use-host-property-decorator
	host: { '[@moveIn]': '' }
})
export class SubjectlistComponent implements OnInit {
	subjectList: any
	showSubject: boolean
	subject = <Subject>{} || []
	editMode = false
	editId
	editFid
	success: any
	msg: string
	constructor(private subjectService: SubjectService) { }

	ngOnInit() {
		this.getSubject()
	}

	getSubject() {

		this.subjectService.getSubject()
			.subscribe(response => {
				// this.subjectService.subjectList = response
				this.subjectList = response['data']
				console.log(this.subjectList)

			}, error => {
				this.msg = "Can't fetch the data right now."
			})

	}

	showSubjectForm() {
		this.showSubject = true
	}

	closeForm() {
		this.showSubject = false
		this.editMode = false
		this.subject = new Subject

	}

	submitSubject(form) {
		// debugger
		// console.log(form.valid)
		if (form.valid) {
			this.subjectService.postSubject(this.subject)
				.subscribe(success => {
					console.log(success)
					this.subjectList.push(success['data'])
					// console.log(this.subjectList)
					this.closeForm()
				}, error => {
					console.log('hello')
				})
		}
	}

	deleteSubject(id, fid) {
		this.subjectService.deleteSubject(id)
			.subscribe(response => {
				this.subjectList.splice(fid, 1)
				this.success = response['message']
			}, error => {
				console.log(error)
			})

	}

	editSubject(id, fid) {
		this.showSubjectForm()
		this.subject = this.subjectList[fid]
		this.editMode = true
		this.editId = id
		this.editFid = fid
	}

	updateSubject() {
		this.subjectService.updateSubject(this.editId, this.subject)
			.subscribe(response => {
				this.subjectList[this.editFid] = this.subject
				this.success = response['message']
				this.editMode = false
				this.subject = new Subject
			}, error => {

			})
	}

}
