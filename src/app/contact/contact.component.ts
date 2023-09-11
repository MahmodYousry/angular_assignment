import { Component } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor () {

  }

  ngAfterViewInit() {
    this.lableAnimation();
  }
  lableAnimation(){
    document.querySelectorAll("input").forEach(inp => {
      $(inp).on("keyup",() => {
        if (inp.value.length > 0) {
          $(inp).prev().animate({top : "-30px"},300);
        } else {
          $(inp).prev().animate({top : "0"},300);
        }
      });
    });
  }

}
