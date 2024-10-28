import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkesPageComponent } from './markes-page.component';

describe('MarkesPageComponent', () => {
  let component: MarkesPageComponent;
  let fixture: ComponentFixture<MarkesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
