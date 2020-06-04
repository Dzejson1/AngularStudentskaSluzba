import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledPredmetaComponent } from './pregled-predmeta.component';

describe('PregledPredmetaComponent', () => {
  let component: PregledPredmetaComponent;
  let fixture: ComponentFixture<PregledPredmetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledPredmetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledPredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
