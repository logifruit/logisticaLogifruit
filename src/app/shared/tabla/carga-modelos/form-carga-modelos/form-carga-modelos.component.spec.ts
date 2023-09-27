import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCargaModelosComponent } from './form-carga-modelos.component';

describe('FormCargaModelosComponent', () => {
  let component: FormCargaModelosComponent;
  let fixture: ComponentFixture<FormCargaModelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCargaModelosComponent]
    });
    fixture = TestBed.createComponent(FormCargaModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
