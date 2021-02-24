import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../security/_services/token-storage.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username: string;
  currentUser: any;

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }

}
