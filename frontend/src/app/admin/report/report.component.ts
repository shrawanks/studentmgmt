import { Component, OnInit, HostBinding } from '@angular/core'
import { StudentsService } from '../studentlist/students.service'
import { ReportService } from './report.service'
import { moveIn, fallIn } from '../../router.animations'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  animations: [moveIn(), fallIn()]
})

export class ReportComponent implements OnInit {
  @HostBinding('@moveIn')
  students: any = []
  student: string
  class: number
  subjects: any = []
  submitted = false
  marksheet = []

  constructor(private studentService: StudentsService, private reportService: ReportService) { }

  ngOnInit() {
    this.getStudents()
  }

  getStudents() {
    this.a.push("a")
    this.studentService.getStudents().subscribe(
      data => {
        console.log(data['data'])
        this.students = data['data']
      }
    )
  }

  classSelected() {
    this.reportService.getSubjects(this.class).subscribe(
      response => {
        console.log(response['data'])
        this.subjects = response['data']
      }
    )
  }

  saveReport() {
    this.submitted = true
    this.students.forEach(function(i) {
      this.marksheet.push({
        "subjectID" : i._id,
        "obtainedMarks" : i_ob;
      })
    })
    const data = { 'studentId' : this.student, "class": this.class, "marksheet" : this.marksheet }
    console.log(data)
    this.reportService.addReport(data).subscribe(
      response => {
        this.student = ""
        this.class = null
        this.subjects = []
        this.submitted = false
      }, error => {
        this.submitted = false
      }
    )
  }

}
