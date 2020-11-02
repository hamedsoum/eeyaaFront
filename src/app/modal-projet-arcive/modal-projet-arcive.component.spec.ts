import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProjetArciveComponent } from './modal-projet-arcive.component';

describe('ModalProjetArciveComponent', () => {
  let component: ModalProjetArciveComponent;
  let fixture: ComponentFixture<ModalProjetArciveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProjetArciveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProjetArciveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
