import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NolascoPage } from './nolasco.page';

describe('NolascoPage', () => {
  let component: NolascoPage;
  let fixture: ComponentFixture<NolascoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NolascoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
