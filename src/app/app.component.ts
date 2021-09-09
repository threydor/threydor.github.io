import {Component, Inject, LOCALE_ID} from '@angular/core';
import {IInfoData} from './core/models/info-data.interface';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'class': 'm-t-30'}
})
export class AppComponent {
  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  infoData: IInfoData[] = [
    {
      left: 'Data urodzenia',
      right: formatDate('1989/09/18', 'dd MMMM yyyy', this.locale)
    },
    {
      left: 'Adres korespondencyjny',
      right: 'ul. Powstańców 8/2, 15-666 Białystok'
    },
    {
      left: 'Telefon',
      right: '+48 693 650 356'
    },
    {
      left: 'E-mail',
      right: `<a href="mailto:osi.tomasz@gmail.com">osi.tomasz@gmail.com</a>`
    }
  ];

  skills ={
    programming: [...'Angular 2+, JavaScript/jQuery, HTML, CSS / SCSS'.split(',')],
    programmingLessKnown: [...'React, WPF, C#, C / C++, Java, Python'.split(',')],
    software: [...'Photoshop CC 2015+, Jira, Confluence, Git'.split(',')]
  }
}
