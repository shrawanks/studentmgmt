import { Component, OnInit, HostBinding } from '@angular/core';

import { ReportService } from '../report/report.service'
import { moveIn, fallIn } from '../../router.animations'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [moveIn(), fallIn()]
})

export class DashboardComponent implements OnInit {
  @HostBinding ('@moveIn')
  students
  constructor(private report: ReportService) { }

  ngOnInit() {
  }

}
