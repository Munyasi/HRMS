import { Component, OnInit } from '@angular/core';
import { UserAccountApi } from '../../shared/sdk';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [UserAccountApi]
})
export class AccountsComponent implements OnInit {
  accounts_list:Object;
  constructor(private router: Router,protected user:UserAccountApi) {
    this.user.isAuthenticated()?false:this.router.navigate(['login']);
  }

  ngOnInit() {
    this.user.find()
        .subscribe(res=>{
          this.accounts_list = res;
        })
  }

}
