import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {CVStore} from '../store/cv.store';
import {CommonModule} from '@angular/common';
import {ExperienceCard} from './experience-card/experience-card';
import {SectionTemplate} from '../section-template/section-template';

@Component({
  selector: 'app-experience-section',
  imports: [MatIconModule, CommonModule, ExperienceCard, SectionTemplate],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSection {
  cvStore = inject(CVStore);
}
