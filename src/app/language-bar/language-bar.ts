import {Component, inject} from '@angular/core';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {Language} from '../store/models/cv-data.model';
import {CVStore} from '../store/cv.store';

@Component({
  selector: 'app-language-bar',
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup,
  ],
  templateUrl: './language-bar.html',
  styleUrl: './language-bar.scss',
  host: {
    'class': 'app-language-bar mx-auto w-full flex justify-end mb-4 print:hidden fixed left-0 top-0 p-3 z-10 backface-hidden'
  }
})
export class LanguageBar {
  cvStore = inject(CVStore);

  switchLanguage(change: MatButtonToggleChange): void {
    const language = change.value as Language;
    if (language) {
      this.cvStore.setLanguage(language);
    }
  }
}
