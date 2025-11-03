import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AbilitiesSection} from './abilities-section';

describe('AbilitiesSection', () => {
  let component: AbilitiesSection;
  let fixture: ComponentFixture<AbilitiesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitiesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
