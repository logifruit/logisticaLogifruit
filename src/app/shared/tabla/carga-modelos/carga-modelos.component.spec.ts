import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaModelosComponent } from './carga-modelos.component';

describe('CargaModelosComponent', () => {
  let component: CargaModelosComponent;
  let fixture: ComponentFixture<CargaModelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaModelosComponent]
    });
    fixture = TestBed.createComponent(CargaModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
