import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngresoInsulinaComponent } from './formulario-ingreso-insulina.component';

describe('FormularioIngresoInsulinaComponent', () => {
  let component: FormularioIngresoInsulinaComponent;
  let fixture: ComponentFixture<FormularioIngresoInsulinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioIngresoInsulinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIngresoInsulinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
