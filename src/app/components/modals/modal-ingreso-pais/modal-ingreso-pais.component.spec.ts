import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngresoPaisComponent } from './modal-ingreso-pais.component';

describe('ModalIngresoPaisComponent', () => {
  let component: ModalIngresoPaisComponent;
  let fixture: ComponentFixture<ModalIngresoPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIngresoPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIngresoPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
