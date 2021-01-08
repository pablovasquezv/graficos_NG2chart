import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInsulinaComponent } from './modal-insulina.component';

describe('ModalInsulinaComponent', () => {
  let component: ModalInsulinaComponent;
  let fixture: ComponentFixture<ModalInsulinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInsulinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInsulinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
