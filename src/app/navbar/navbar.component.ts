import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor() {
    this.paddingAnimation();
  }

  paddingAnimation() {
    window.addEventListener("scroll", () => {
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 0) {
        document.querySelector("nav")?.classList.remove("mypadding");
      } else {
        document.querySelector("nav")?.classList.add("mypadding");
      }
    });
  }
}
