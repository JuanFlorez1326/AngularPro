import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {
  public labels = input.required<GitHubLabel[]>();
  public issuesService = inject(IssuesService);

  public isSelected( labelName: string ) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  public toggleLalel( labelname: string ) {
    this.issuesService.toggleLabel(labelname);
  }
}
