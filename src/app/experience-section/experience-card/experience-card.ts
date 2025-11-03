import {Component, inject, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Experience} from '../../store/models/cv-data.model';
import {CVStore} from '../../store/cv.store';
import {NgClass, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-experience-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  readonly cvStore = inject(CVStore);

  readonly exp = input.required<Experience>();
}
