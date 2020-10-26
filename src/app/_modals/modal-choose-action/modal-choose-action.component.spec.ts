import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChooseActionComponent } from './modal-choose-action.component';

describe('ModalChooseActionComponent', () => {
  let component: ModalChooseActionComponent;
  let fixture: ComponentFixture<ModalChooseActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChooseActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChooseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
