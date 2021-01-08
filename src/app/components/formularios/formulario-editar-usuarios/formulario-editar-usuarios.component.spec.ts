import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarUsuariosComponent } from './formulario-editar-usuarios.component';

describe('FormularioEditarUsuariosComponent', () => {
  let component: FormularioEditarUsuariosComponent;
  let fixture: ComponentFixture<FormularioEditarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEditarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
