import { Component, OnInit, HostBinding } from '@angular/core'
import { SubjectService} from './subject.service'
import { Subject} from './subject'
import { Router } from '@angular/router'
import { moveIn, fallIn } from '../../router.animations'


@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
	styleUrls: ['./subjectlist.component.scss'],
	animations: [moveIn(), fallIn()]
})

export class SubjectlistComponent implements OnInit {
	@HostBinding('@moveIn')
	subjectList: any = []
	showSubject: boolean
	subject = <Subject> {} || []
	editMode = false
	editId
	editFid
	success: any
	msg: string
	submitted = false
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  	this.getSubject()
  }

  getSubject() {
		if (!this.subjectService.subjectList || this.subjectService.subjectList.length < 1) {
			this.subjectService.getSubject()
			.subscribe(response => {
				console.log(response)
				if (response['data'].length === 0) {
					this.msg = "No Subjects added yet"
				} else {
					this.subjectService.subjectList = response['data']
					this.subjectList = response['data']
				}
			}, error => {
				this.msg = "Can't fetch the data right now."
			})
		} else {
			this.subjectList = this.subjectService.subjectList
		}
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
	this.submitted = true
    console.log(form.valid)
    if (form.valid) {
  		this.subjectService.postSubject(this.subject)
  		.subscribe(responese => {
  			console.log(responese)
  			this.subjectList.push(responese['data'])
			this.closeForm()
			this.submitted = false
  		}, error => {
			console.log(error)
			this.submitted = false
  		})
    }
  }

  deleteSubject(id, fid) {
  	this.subjectService.deleteSubject(id)
  	.subscribe(response => {
				console.log(response)
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
			this.submitted = false
			this.closeForm()
  	}, error => {
		this.submitted = false
		this.editMode = false
  	})
  }

}
