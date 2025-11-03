import {Component, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Education} from '../../store/models/cv-data.model';

@Component({
  selector: 'app-education-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    MatCardContent
  ],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
})
export class EducationCard {
  readonly edu = input.required<Education>();
}
