import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioEstudiantePage } from './servicio-estudiante.page';

describe('ServicioEstudiantePage', () => {
  let component: ServicioEstudiantePage;
  let fixture: ComponentFixture<ServicioEstudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
