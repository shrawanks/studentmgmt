import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listproperty',
  templateUrl: './listproperty.component.html',
  styleUrls: ['./listproperty.component.scss']
})
export class ListpropertyComponent implements OnInit {
  step = 0;
  propType: any;

  constructor() { }

  ngOnInit() {
  }

  popType(type) {
    this.propType = type;
    if (type === "property") {
      this.step = 5;
    } else {
      this.step++;
    }
  }

  nextStep() {
    this.step++;
  }

  previousStep() {
    if (this.propType === "property" && this.step === 3)
      this.step = 0;
    else
      this.step--;
  }
}
