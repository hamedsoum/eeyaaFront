import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebriefCreatif2Component } from './debrief-creatif2.component';

describe('DebriefCreatif2Component', () => {
  let component: DebriefCreatif2Component;
  let fixture: ComponentFixture<DebriefCreatif2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebriefCreatif2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebriefCreatif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
