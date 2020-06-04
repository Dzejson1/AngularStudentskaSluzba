import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzaberiPredmeteComponent } from './izaberi-predmete.component';

describe('IzaberiPredmeteComponent', () => {
  let component: IzaberiPredmeteComponent;
  let fixture: ComponentFixture<IzaberiPredmeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzaberiPredmeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzaberiPredmeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
