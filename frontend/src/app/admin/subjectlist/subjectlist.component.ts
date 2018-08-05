import { Component, OnInit } from '@angular/core';
import { SubjectService} from './subject.service';
import { Subject} from './subject';



@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.scss']
})
export class SubjectlistComponent implements OnInit {
	subjectList:any;
	showSubject:boolean=false;
	subject=<Subject> {} || [];
	editMode=false;
	editId;
	editFid;
  constructor(private subjectService:SubjectService) { }

  ngOnInit() {
  	this.getSubject();
  }

  showSubjectForm(){
  		this.showSubject=true;
  }
  closeForm(){
  		this.showSubject=false;

  }

  submitSubject(){
  		this.subjectService.postSubject(this.subject)
  		.subscribe(success=>{
  			console.log(success)
  			this.subjectList.push(success.data);
  			console.log(this.subjectList);
  			this.closeForm();
  		}, error=>{
  			console.log(error)
  		})
  }

  getSubject() {
  	this.subjectService.getSubject()
			.subscribe(response=>{
				this.subjectList=response.data
			}, error=>{

			})
  }

  deleteSubject(id, fid){
  	this.subjectService.deleteSubject(id)
  	.subscribe(response=>{
  			this.subjectList.splice(fid, 1);
  	}, error=>{
  		console.log(error)
  	})

  }

  editSubject(id, fid){
  		this.showSubjectForm();
  		this.subject = this.subjectList[fid];
  		this.editMode=true;
  		this.editId=id;
  		this.editFid=fid;
  }

  updateSubject(){
  	this.subjectService.updateSubject(this.editId, this.subject)
  	.subscribe(response=>{
  		this.subjectList[this.editFid] = this.subject;

  	}, error=>{

  	})
  }

}