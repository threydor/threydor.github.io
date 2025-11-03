import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {CVStore} from '../store/cv.store';
import {CommonModule} from '@angular/common';
import {EducationCard} from './education-card/education-card';
import {SectionTemplate} from '../section-template/section-template';

@Component({
  selector: 'app-education-section',
  imports: [MatIconModule, CommonModule, EducationCard, SectionTemplate],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
})
export class EducationSection {
  cvStore = inject(CVStore);
}
