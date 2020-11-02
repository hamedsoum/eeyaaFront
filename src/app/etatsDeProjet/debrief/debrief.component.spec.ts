import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebriefComponent } from './debrief.component';

describe('DebriefComponent', () => {
  let component: DebriefComponent;
  let fixture: ComponentFixture<DebriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
