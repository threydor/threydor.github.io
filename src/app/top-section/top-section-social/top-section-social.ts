import {Component, inject} from '@angular/core';
import {CVStore} from '../../store/cv.store';

@Component({
  selector: 'app-top-section-social',
  imports: [],
  templateUrl: './top-section-social.html',
  styleUrl: './top-section-social.scss',
})
export class TopSectionSocial {
  cvStore = inject(CVStore);

}
