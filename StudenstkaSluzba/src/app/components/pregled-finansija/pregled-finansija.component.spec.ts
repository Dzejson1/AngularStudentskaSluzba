import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledFinansijaComponent } from './pregled-finansija.component';

describe('PregledFinansijaComponent', () => {
  let component: PregledFinansijaComponent;
  let fixture: ComponentFixture<PregledFinansijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledFinansijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledFinansijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
