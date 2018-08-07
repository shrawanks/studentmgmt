import { Component, OnInit, HostBinding } from '@angular/core'

import { ReportService } from '../report/report.service'
import { moveIn, fallIn } from '../../router.animations'
import { SubjectService } from '../subjectlist/subject.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [moveIn(), fallIn()]
})

export class DashboardComponent implements OnInit {
  @HostBinding ('@moveIn')
  students
  subjectList

  constructor(private report: ReportService, private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubject()
  }

  getSubject() {
		if (!this.subjectService.subjectList) {
			this.subjectService.getSubject()
			.subscribe(response => {
				console.log(response)
				this.subjectService.subjectList = response
				this.subjectList = response
			}, error => {
				this.msg = "Can't fetch the data right now."
			})
		} else {
			this.subjectList = this.subjectService.subjectList
		}
	}

}
