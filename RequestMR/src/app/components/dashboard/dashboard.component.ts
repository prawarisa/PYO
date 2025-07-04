import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ApiService } from 'src/app/services/api.service';
import { LayoutService } from 'src/app/services/app.layout.service';
// import { daily_ } from '@app/_models';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentUser: any;
  isUserLoggedIn: boolean;

  constructor(
    public layoutService: LayoutService,
    private api: ApiService,
    private account: AccountService
  ) {

  }

  ngOnInit() {
    this.Get_user();
  }

  Get_user() {
    this.currentUser = this.account.getUser();
    if (this.currentUser.Admin_ >= 70) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
}
