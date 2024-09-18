import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroUcPage } from './registro-uc.page';

describe('RegistroUcPage', () => {
  let component: RegistroUcPage;
  let fixture: ComponentFixture<RegistroUcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
