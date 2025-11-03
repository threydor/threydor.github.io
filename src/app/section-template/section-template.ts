import {Component, input} from '@angular/core';
import {SectionTitle} from "./section-title/section-title";

@Component({
  selector: 'app-section-template',
  imports: [
    SectionTitle
  ],
  templateUrl: './section-template.html',
  styleUrl: './section-template.scss',
})
export class SectionTemplate {
  sectionTitle = input.required<string>();

}
