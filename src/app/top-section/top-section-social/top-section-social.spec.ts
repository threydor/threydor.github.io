import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSectionSocial } from './top-section-social';

describe('TopSectionSocial', () => {
  let component: TopSectionSocial;
  let fixture: ComponentFixture<TopSectionSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSectionSocial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSectionSocial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
