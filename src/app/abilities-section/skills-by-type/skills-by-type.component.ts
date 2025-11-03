import {Component, input} from '@angular/core';

@Component({
  selector: 'app-skills-by-type',
  imports: [],
  templateUrl: './skills-by-type.component.html',
  styleUrl: './skills-by-type.component.scss',
})
export class SkillsByType {
  typeLabel = input.required<string>();
  skills = input.required<string[]>();

}
