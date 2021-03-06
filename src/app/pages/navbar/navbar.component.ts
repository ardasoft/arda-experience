import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navIsFixed = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    const number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number > 600) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 600) {
      this.navIsFixed = false;
    }
  }
}
