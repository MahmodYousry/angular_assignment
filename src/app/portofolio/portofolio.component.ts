import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {

  constructor () {
  }

  ngAfterViewInit() {
    this.lightBox();
  }

  lightBox() {
    let images = document.querySelectorAll(".cur-pointer img");

    for (let i = 0; i < images.length; i++) {
      const element = images[i];
      console.log(element);
    }

  }

}
