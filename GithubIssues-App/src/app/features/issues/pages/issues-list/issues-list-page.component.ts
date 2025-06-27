import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-issues-list-page',
  imports: [],
  templateUrl: './issues-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuesListPageComponent { }
