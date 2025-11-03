import {Component, inject} from '@angular/core';
import {CVStore} from '../store/cv.store';
import {CommonModule} from '@angular/common';
import {SectionTemplate} from '../section-template/section-template';
import {SkillsCard} from './skills-card/skills-card';

@Component({
  selector: 'app-abilities-section',
  imports: [CommonModule, SectionTemplate, SkillsCard],
  templateUrl: './abilities-section.html',
  styleUrl: './abilities-section.scss',
})
export class AbilitiesSection {
  cvStore = inject(CVStore);
}
