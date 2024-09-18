import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiUsPage } from './confi-us.page';

describe('ConfiUsPage', () => {
  let component: ConfiUsPage;
  let fixture: ComponentFixture<ConfiUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
