import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageBar} from './language-bar';

describe('LanguageBar', () => {
  let component: LanguageBar;
  let fixture: ComponentFixture<LanguageBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
