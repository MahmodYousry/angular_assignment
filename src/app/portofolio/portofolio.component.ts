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
    document.querySelectorAll(".col-12").forEach(box => {
      box.addEventListener("click",() => {
        box.querySelectorAll("img").forEach(img => {
          let src = img.getAttribute("src");
          this.setMainImg(src);
          document.querySelector(".light-box")?.classList.remove("d-none");
        });
      });
    })
  }

  setMainImg(src:any){
    document.querySelector("#mainImg")?.setAttribute("src", src);
    this.close();
  }

  close() {

    document.querySelector(".light-box")?.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelector(".light-box")?.classList.add("d-none");
    });

    document.querySelector("#mainImg")?.addEventListener("click",(e) => {
      e.stopPropagation();
    });

  }

}
