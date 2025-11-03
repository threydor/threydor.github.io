import {Component, computed, inject, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgClass} from '@angular/common';
import {CVStore} from '../../store/cv.store';

@Component({
  selector: 'app-top-section-card-content',
  imports: [
    MatIcon,
    MatIconButton,
    NgClass
  ],
  templateUrl: './top-section-card-content.html',
  styleUrl: './top-section-card-content.scss',
})
export class TopSectionCardContent {
  readonly iconName = input.required<string>();
  readonly label = input.required<string>();
  readonly reverseOnMobile = input<boolean>(false);
  readonly copyValue = input<string>('');

  private readonly snackBar = inject(MatSnackBar);
  private readonly cvStore = inject(CVStore);

  readonly contentCssClass = computed(() => this.reverseOnMobile() ? 'text-end flex-row-reverse md:flex-row md:text-start print:flex-row print:text-start' : '')

  async copyToClipboard(): Promise<void> {
    const value = this.copyValue();
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      this.showCopyMessage();
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = value;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        const success = document.execCommand('copy');
        if (success) {
          this.showCopyMessage();
        } else {
          console.error('Failed to copy');
        }
      } catch (e) {
        console.error('Failed to copy:', e);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  }

  private showCopyMessage(): void {
    const message = this.cvStore.sectionLabels().copied;
    this.snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
