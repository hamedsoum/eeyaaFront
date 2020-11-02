import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebriefCarouseComponent } from './debrief-carouse.component';

describe('DebriefCarouseComponent', () => {
  let component: DebriefCarouseComponent;
  let fixture: ComponentFixture<DebriefCarouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebriefCarouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebriefCarouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
