import {Component, inject} from '@angular/core';
import {TopSection} from './top-section/top-section';
import {AbilitiesSection} from './abilities-section/abilities-section';
import {ExperienceSection} from './experience-section/experience-section';
import {EducationSection} from './education-section/education-section';
import {CVStore} from './store/cv.store';
import {CommonModule} from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {LanguageBar} from './language-bar/language-bar';

@Component({
  selector: 'app-root',
  imports: [TopSection, AbilitiesSection, ExperienceSection, EducationSection, CommonModule, MatButtonToggleModule, LanguageBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  cvStore = inject(CVStore);

  constructor() {
    this.cvStore.loadData('en');
  }
}
