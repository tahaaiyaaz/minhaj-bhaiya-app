import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController } from '@ionic/angular';
import { SharedService } from 'src/app/src/app/services/shared.service';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
}) 
export class PopoverPage implements OnInit {

  disable=true;

  passedId=null;
  orders_to_change;
  // index=null;
  constructor(private navParams:NavParams,private PopoverController:PopoverController, private shared : SharedService , private navctrl:NavController) { 
    
  }

  ngOnInit() {
    this.passedId=this.navParams.get('custom_id')
    // this.index=this.navParams.get('i');

    this.orders_to_change=JSON.parse(JSON.stringify(this.passedId))
    // console.log(this.orders_to_change)

    // console.log( this.passedId.users[this.index])
    console.log(this.passedId.idoffirebase)
  }

  change(name:any){

    this.orders_to_change.i.forEach((ev) => {
      
      for(var i=0;i<ev.price.length;i++)
    {
      console.log(ev.price[i])
      if(ev.price[i]=='e'){ 
        ev.price= Array.from(ev.price);
        
        ev.price.splice(i,1)
        // console.log(price)
        ev.price=ev.price.join('')   
      }
      if(ev.price[i]=='-')
      {
        ev.price= Array.from(ev.price);
        
        ev.price.splice(i,1)
        console.log(ev.price)
        ev.price=ev.price.join('')
      }

    }

  
    for(var i=0;i<ev.quantity.length;i++)
    {
      console.log(ev.quantity[i])
      if(ev.quantity[i]=='e'){
        ev.quantity= Array.from(ev.quantity);
        
        ev.quantity.splice(i,1)
          ev.quantity=ev.quantity.join('')   
      }
      if(ev.quantity[i]=='-')
      {
        ev.quantity= Array.from(ev.quantity);
        
        ev.quantity.splice(i,1)
        console.log(ev.quantity)
        ev.quantity=ev.quantity.join('')
      }
    }

    if(ev.price==''||ev.quantity=='')
    {
      alert("please inpute some values")
      throw new Error("achha hua")
      console.log("ye tho khali hai")

    }
    });


    
    this.passedId=JSON.parse(JSON.stringify(this.orders_to_change));
    var cunt =0;
    this.passedId.i.forEach((res)=>{
      cunt +=parseInt(res.quantity);  
    })
    this.passedId.quantity=cunt;
    this.shared.update(this.passedId.idoffirebase,this.passedId)
    
  }


changePrice(a,b)
{

  for(var i=0;i<b.length;i++)
    {
      console.log(b[i])
      if(b[i]=='e'){ 
        b= Array.from(b);
        
        b.splice(i,1)
        // console.log(price)
        b=b.join('')   
      }
      if(b[i]=='-')
      {
        
        console.log("b ka masla",b)
        b= Array.from(b);
        
        b.splice(i,1)
        console.log(b)
        b=b.join('')
        a=b;
      }
    }

    
    // for(var i=0;i<quantity.length;i++)
    // {
    //   console.log(quantity[i])
    //   if(quantity[i]=='e'){
    //     quantity= Array.from(quantity);
        
    //     quantity.splice(i,1)
    //     // console.log(price)
    //     quantity=quantity.join('')   
    //   }
    //   if(quantity[i]=='-')
    //   {
    //     quantity= Array.from(quantity);
        
    //     quantity.splice(i,1)
    //     console.log(quantity)
    //     quantity=quantity.join('')
    //   }
    // }

    // if(b=='')
    // {
    //   alert("please inpute some values")
    //   throw new Error("achha hua")
    //   console.log("ye tho khali hai",b)

    // }



  a.price=b;

console.log(a.price,b,this.passedId.i)
}
changeQuantity(b,c) 
{
  for(var i=0;i<b.length;i++)
    {
      console.log(b[i])
      if(b[i]=='e'){ 
        b= Array.from(b);
        
        b.splice(i,1)
        // console.log(price)
        b=b.join('')   
      }
      if(b[i]=='-')
      {
        b= Array.from(b);
        
        b.splice(i,1)
        console.log(b)
        b=b.join('')
      }
    }

  if(b=='')
  {
    alert("please inpute some values")
    throw new Error("achha hua")
    console.log("ye tho khali hai",b)

  }



  b.quantity=c.value
console.log(b,c.value)
}






  changeDisable(){

    console.log("yan pe kaikuu aaya re pakit")
    let a = document.getElementsByClassName("cancel_button") as unknown as NodeListOf<HTMLElement>;

   for(var i=0;i<a.length;i++)
   {
     
    if(a[i].style.display=='')
    {
      console.log(a[i].style.display)
      a[i].style.display="block"
    }
    
    else if(a[i].style.display=='none')
    {
      console.log(a[i].style.display)
      a[i].style.display="block"
    }


    else if(a[i].style.display=='block')
    {
      console.log(a[i].style.display)
      a[i].style.display="none"
    }
   }
    


    if(this.disable==true)
  
    {
      this.disable=false;
    }
    else if(this.disable==false)
    {
      this.disable=true;
    }
    

  }

  getBack()
  {

    this.PopoverController.dismiss(this.passedId,"good");

  }
  cancel(orch,index)
  {
    this.orders_to_change.i[index] =JSON.parse(JSON.stringify(this.passedId.i[index]));
console.log("theek hai")

    this.changeDisable()
    // ev.srcElement.style.display="none"
    // console.log(ev.srcElement.style.display)
    
     
    // // if(ev.target.style.display=='')
    // // {
    // //   ev.target.style.display="block"
    // //   console.log(ev.target.style.display)

    // // }
    
    // // else if(ev.target.style.display=='none')
    // // {

    // //   ev.target.style.display="block"
    // //   console.log(ev.target.style.display)

    // // }


    // if(ev.target.style.display=='block')
    // {

    //   ev.target.style.display="none"
    //   console.log(ev.target.style.display)

    // }
    
  
    


    // if(this.disable==true)
  
    // {
    //   this.disable=false;
    // }
    // else if(this.disable==false)
    // {
    //   this.disable=true;
    // }
    


  }
}
