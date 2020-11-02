import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGainComponent } from './gestion-gain.component';

describe('GestionGainComponent', () => {
  let component: GestionGainComponent;
  let fixture: ComponentFixture<GestionGainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionGainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
