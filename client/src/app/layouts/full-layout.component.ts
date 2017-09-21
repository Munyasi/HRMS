import { Component, OnInit } from '@angular/core';
import { UserAccountApi } from '../shared/sdk';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  constructor (private router: Router,protected user:UserAccountApi) {

  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}

  onLogout(event) {
    event.stopPropagation();
    this.user.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
