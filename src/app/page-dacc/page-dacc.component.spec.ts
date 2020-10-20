import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDaccComponent } from './page-dacc.component';

describe('PageDaccComponent', () => {
  let component: PageDaccComponent;
  let fixture: ComponentFixture<PageDaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
