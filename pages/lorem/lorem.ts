import { Component } from "@angular/core";
import { NavController, Button } from "ionic-angular";

@Component({
  selector: "page-lorem",
  templateUrl: "lorem.html"
})
export class LoremPage {
  constructor(public navCtrl: NavController) {}
  count = 0;
  increase() {
    this.count += 1;
  }
  decrease() {
    this.count -= 1;
  }
}
