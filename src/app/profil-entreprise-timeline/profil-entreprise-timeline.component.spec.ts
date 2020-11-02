import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEntrepriseTimelineComponent } from './profil-entreprise-timeline.component';

describe('ProfilEntrepriseTimelineComponent', () => {
  let component: ProfilEntrepriseTimelineComponent;
  let fixture: ComponentFixture<ProfilEntrepriseTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilEntrepriseTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEntrepriseTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
