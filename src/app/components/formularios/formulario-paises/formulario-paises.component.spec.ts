import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPaisesComponent } from './formulario-paises.component';

describe('FormularioPaisesComponent', () => {
  let component: FormularioPaisesComponent;
  let fixture: ComponentFixture<FormularioPaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
