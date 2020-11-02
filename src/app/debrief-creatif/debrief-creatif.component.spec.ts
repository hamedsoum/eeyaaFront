import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebriefCreatifComponent } from './debrief-creatif.component';

describe('DebriefCreatifComponent', () => {
  let component: DebriefCreatifComponent;
  let fixture: ComponentFixture<DebriefCreatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebriefCreatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebriefCreatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
