import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../studentlist/students.service";
import { ReportService } from "./report.service";

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"]
})
export class ReportComponent implements OnInit {
  students: any = [];
  student: string;
  class: number;
  subjects: any = [];

  constructor(
    private studentService: StudentsService,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      console.log(data["data"]);
      this.students = data["data"];
    });
  }

  classSelected() {
    this.reportService.getSubjects(this.class).subscribe(response => {
      console.log(response["data"]);
      this.subjects = response["data"];
    });
  }
}
