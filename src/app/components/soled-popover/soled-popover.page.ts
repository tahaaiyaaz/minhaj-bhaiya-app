import { Component, OnInit } from '@angular/core';
import { NavParams,PopoverController } from '@ionic/angular';
import { SharedService } from 'src/app/src/app/services/shared.service';

@Component({
  selector: 'app-soled-popover',
  templateUrl: './soled-popover.page.html',
  styleUrls: ['./soled-popover.page.scss'],
})
export class SoledPopoverPage implements OnInit {
// constructor(){}
// ngOnInit(): void {
  
// }

  passedId=null;
  index=null;
  constructor(private navParams:NavParams,private PopoverController:PopoverController, private shared : SharedService) { }

  ngOnInit() {
    this.passedId=this.navParams.get('custom_id')
    this.index=this.navParams.get('i')

    console.log( this.passedId.users[this.index])
  }

  changeSoledItems(name:any,price:any,quantity:any){
    this.passedId.soldChange(name,price,quantity,this.index)
    console.log(name,price,quantity,this.shared.users[this.index]);

  }

}
