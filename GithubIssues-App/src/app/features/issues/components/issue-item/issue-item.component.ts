import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-item',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './issue-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {

  private issueService = inject(IssueService);

  public issue = input.required<GitHubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }

  public prefetchData() {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }
}
