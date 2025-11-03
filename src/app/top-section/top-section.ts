import {Component, inject} from '@angular/core';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {CVStore} from '../store/cv.store';
import {TopSectionCardContent} from './top-section-card-content/top-section-card-content';
import {TopSectionSocial} from './top-section-social/top-section-social';

@Component({
  selector: 'app-top-section',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardAvatar,
    NgOptimizedImage,
    MatCardContent,
    MatIconModule,
    CommonModule,
    TopSectionCardContent,
    TopSectionSocial
  ],
  templateUrl: './top-section.html',
  styleUrl: './top-section.scss',
})
export class TopSection {
  cvStore = inject(CVStore);
}
