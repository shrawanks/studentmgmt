import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-propertytype',
  templateUrl: './propertytype.component.html',
  styleUrls: ['./propertytype.component.scss'],
  animations: [moveIn(), fallIn()],
})
export class PropertytypeComponent implements OnInit {
  @HostBinding('@moveIn')
  @Output() typeSelected = new EventEmitter<string>();
  constructor() { }

  selected(type) {
    this.typeSelected.emit(type);
  }

  ngOnInit() {
  }

}
