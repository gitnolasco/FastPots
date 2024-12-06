import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GabrielPage } from './gabriel.page';

describe('GabrielPage', () => {
  let component: GabrielPage;
  let fixture: ComponentFixture<GabrielPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GabrielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
