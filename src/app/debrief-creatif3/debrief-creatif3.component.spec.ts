import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebriefCreatif3Component } from './debrief-creatif3.component';

describe('DebriefCreatif3Component', () => {
  let component: DebriefCreatif3Component;
  let fixture: ComponentFixture<DebriefCreatif3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebriefCreatif3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebriefCreatif3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
