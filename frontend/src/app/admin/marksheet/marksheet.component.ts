import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../studentlist/students.service";
import { MarksheetService } from "./marksheet.service";

@Component({
  selector: "app-marksheet",
  templateUrl: "./marksheet.component.html",
  styleUrls: ["./marksheet.component.scss"]
})
export class MarksheetComponent implements OnInit {
  students: any = [];

  filteredStudents = [];

  class: number;
  results: any = [];
  studentName;
  studentID;
  subjectList = [];
  // isSelected: boolean = false;



  constructor(
    private StudentService: StudentsService,
    private MarksheetService: MarksheetService
  ) { }

  ngOnInit() {
    this.fetchSubject();

  }

  selectchange(e) {
    // alert("hello")
    this.class = e.target.value;
    this.StudentService.getStudents()
      .subscribe(response => {

        this.students = response
        this.results = this.students.filter(
          item => item.class == this.class
        );
        console.log(this.results)


      },
        error => {

        }
      )

    // this.newArr = this.students.filter(function (item) {
    //   return item.class === 2;
    // console.log(this.results)
    // });
    // this.isSelected = true;

    // this.StudentService.getStudents().subscribe(
    //   response => {
    //     console.log(response);
    //     this.results = response['data']
    //   },
    //   error => {
    //     //errror goes here
    //   }
    // )



    // this.results = this.students.filter(
    //   students => students.class === this.class
    // );
    // this.filteredStudents.push(this.results);

    // this.students.filter(student=>student.)
    // console.log(this.results);

    // console.log(this.filteredStudents);
  }

  fetchSubject() {
    this.MarksheetService.getsubject()
      .subscribe(
        response => {
          console.log(response);
        }
      )

  }
}
