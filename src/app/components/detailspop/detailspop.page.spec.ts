import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailspopPage } from './detailspop.page';

describe('DetailspopPage', () => {
  let component: DetailspopPage;
  let fixture: ComponentFixture<DetailspopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailspopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
