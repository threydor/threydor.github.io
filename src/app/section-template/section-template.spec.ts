import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionTemplate} from './section-template';

describe('SectionTemplate', () => {
  let component: SectionTemplate;
  let fixture: ComponentFixture<SectionTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
