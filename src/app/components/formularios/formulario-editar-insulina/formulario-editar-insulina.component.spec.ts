import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarInsulinaComponent } from './formulario-editar-insulina.component';

describe('FormularioEditarInsulinaComponent', () => {
  let component: FormularioEditarInsulinaComponent;
  let fixture: ComponentFixture<FormularioEditarInsulinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEditarInsulinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditarInsulinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
