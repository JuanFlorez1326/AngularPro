import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-issue-comment',
  imports: [CommonModule, MarkdownModule],
  templateUrl: './issue-comment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueCommentComponent {
  public issue = input.required<GitHubIssue>();
}
