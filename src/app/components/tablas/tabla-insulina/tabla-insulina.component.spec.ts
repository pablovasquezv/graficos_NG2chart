import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInsulinaComponent } from './tabla-insulina.component';

describe('TablaInsulinaComponent', () => {
  let component: TablaInsulinaComponent;
  let fixture: ComponentFixture<TablaInsulinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaInsulinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaInsulinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
