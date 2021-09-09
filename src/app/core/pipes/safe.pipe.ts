import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {
  }

  public transform(value: any, safeType: string): SafeHtml {
    if (!value) {
      return '';
    }
    switch (safeType) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      default:
        throw new Error(`That wasn't safe, wasn't it?: ${safeType}`);
    }
  }
}
