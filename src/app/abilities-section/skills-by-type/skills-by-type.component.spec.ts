import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillsByType} from './skills-by-type.component';

describe('AbilitiesByType', () => {
  let component: SkillsByType;
  let fixture: ComponentFixture<SkillsByType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsByType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsByType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
