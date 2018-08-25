import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteltypeComponent } from './hoteltype.component';

describe('HoteltypeComponent', () => {
  let component: HoteltypeComponent;
  let fixture: ComponentFixture<HoteltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
