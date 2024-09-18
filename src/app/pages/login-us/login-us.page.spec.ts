import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginUsPage } from './login-us.page';

describe('LoginUsPage', () => {
  let component: LoginUsPage;
  let fixture: ComponentFixture<LoginUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
