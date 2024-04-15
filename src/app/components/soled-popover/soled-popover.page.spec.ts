import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoledPopoverPage } from './soled-popover.page';

describe('SoledPopoverPage', () => {
  let component: SoledPopoverPage;
  let fixture: ComponentFixture<SoledPopoverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SoledPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
