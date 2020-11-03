import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirProjetEnCoursCreatifComponent } from './voir-projet-en-cours-creatif.component';

describe('VoirProjetEnCoursCreatifComponent', () => {
  let component: VoirProjetEnCoursCreatifComponent;
  let fixture: ComponentFixture<VoirProjetEnCoursCreatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirProjetEnCoursCreatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirProjetEnCoursCreatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
