import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../security/_services/token-storage.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() title = '';
  @Input() icon = '';

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.assign('/auth');
  }
}
