import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopSectionCardContent} from './top-section-card-content';

describe('TopSectionCardContent', () => {
  let component: TopSectionCardContent;
  let fixture: ComponentFixture<TopSectionCardContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSectionCardContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSectionCardContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
