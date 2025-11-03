import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {SkillsByType} from "../skills-by-type/skills-by-type.component";
import {CVStore} from '../../store/cv.store';

@Component({
  selector: 'app-skills-card',
  imports: [
    MatCard,
    MatCardContent,
    SkillsByType
  ],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.scss',
})
export class SkillsCard {
  cvStore = inject(CVStore);
}
