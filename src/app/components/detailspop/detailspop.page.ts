import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detailspop',
  templateUrl: './detailspop.page.html',
  styleUrls: ['./detailspop.page.scss'],
})
export class DetailspopPage implements OnInit {
a;
b;
  

  constructor(private navParams:NavParams ) {
    this.a=this.navParams.get('custom_id')
    this.b=this.navParams.get('i')
    console.log(this.a,this.b)
   }

  ngOnInit() {
  }

}
