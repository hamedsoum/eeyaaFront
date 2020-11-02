import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChooseActionCreatifComponent } from './modal-choose-action-creatif.component';

describe('ModalChooseActionCreatifComponent', () => {
  let component: ModalChooseActionCreatifComponent;
  let fixture: ComponentFixture<ModalChooseActionCreatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChooseActionCreatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChooseActionCreatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
