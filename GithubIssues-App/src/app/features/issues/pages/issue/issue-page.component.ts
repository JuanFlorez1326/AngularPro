import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { CommonModule } from '@angular/common';
import { IssueCommentComponent } from "../../components/issue-comment/issue-comment.component";

@Component({
  selector: 'app-issue-page',
  imports: [
    CommonModule,
    RouterLink,
    IssueCommentComponent
],
  templateUrl: './issue-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePageComponent {

  public route = inject(ActivatedRoute);
  public issueService = inject(IssueService);

  public issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map( params => params.get('number') ?? ''),
      tap( number => this.issueService.setIssueNumber(number))
    )
  );

  public issueQuery = this.issueService.issueQuery;
  public issueCommentsQuery = this.issueService.issueCommentsQuery;
}
