import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIngresoUsuariosComponent } from './formulario-ingreso-usuarios.component';

describe('FormularioIngresoUsuariosComponent', () => {
  let component: FormularioIngresoUsuariosComponent;
  let fixture: ComponentFixture<FormularioIngresoUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioIngresoUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIngresoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
