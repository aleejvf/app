import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialUsPage } from './historial-us.page';

describe('HistorialUsPage', () => {
  let component: HistorialUsPage;
  let fixture: ComponentFixture<HistorialUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
