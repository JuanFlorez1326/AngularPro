import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SideMenuComponent } from "../../../../shared/components/side-menu/side-menu.component";

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './admin-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {
  public isAuth = signal(false);

  public onLogin() {
    this.isAuth.set(true);
  }

  public onLogout() {
    this.isAuth.set(false);
  }
}
