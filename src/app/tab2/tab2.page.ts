
import { Component, Input, OnInit } from '@angular/core';
import { Tab3Page } from '../tab3/tab3.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../components/popover/popover.page';
import { SharedService } from '../src/app/services/shared.service';
import { SoledPopoverPage } from '../components/soled-popover/soled-popover.page';
import { PopoverPageModule } from '../components/popover/popover.module';
import { throwError } from 'rxjs';
import { Tab4Page } from '../tab4/tab4.page';
import { Firestore, collection, collectionData, doc, getDoc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { initializeApp } from '@angular/fire/app';
// import { Tab1Page } from '../tab1/tab1.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})






export class Tab2Page implements OnInit {
  oldItemToChange;
  firstItem;
  oldItems = [];
  custom_id: any;
  newstockId;
  oldstockId;
  arr = this.shared.users;
  message: any;
  firebaseDate;
  addToOldItems(price, quantity) {
    if(this.oldItemToChange==null){
      alert("please select ")
      throw new Error("achha hua")
     

    }



    for (var i = 0; i < price.length; i++) {
      console.log(price[i])
      if (price[i] == 'e') {
        price = Array.from(price);

        price.splice(i, 1)
        // console.log(price)
        price = price.join('')
      }
      if (price[i] == '-') {
        price = Array.from(price);

        price.splice(i, 1)
        console.log(price)
        price = price.join('')
      }
    }


    for (var i = 0; i < quantity.length; i++) {
      console.log(quantity[i])
      if (quantity[i] == 'e') {
        quantity = Array.from(quantity);

        quantity.splice(i, 1)
        // console.log(price)
        quantity = quantity.join('')
      }
      if (quantity[i] == '-') {
        quantity = Array.from(quantity);

        quantity.splice(i, 1)
        console.log(quantity)
        quantity = quantity.join('')
      }
    }

    if (price == '' || quantity == '') {
      alert("please inpute some values")
      throw new Error("achha hua")
      console.log("ye tho khali hai", price, quantity)

    }
    console.log(price, quantity)
    console.log("yahan pe ",this.shared.users[0])
    
    // this.shared.addNoteForNewItemOnDate({
    //   name: this.oldItemToChange,
    //   price:price,
    //   quantity: quantity,
    //   idoffirebase: this.shared.idOfFireBaseForNewStockOnDate,
    //   date: this.shared.thisdate,
    //   month:this.shared.thismonth,
    //   year:this.shared.thisyear
    // })
console.log("items to change",9,this.oldItemToChange)

    this.shared.changeIinusers(this.oldItemToChange, price,quantity)

    // this.shared.users.forEach((res) => {

    //   if (res.name == this.oldItemToChange) {
    //     this.shared.changeIinusers(res.name,price,quantity)
    //     // res.i.push({price:price,quantity:quantity}) 
    //     // // = (parseInt(res.i[0].price) + parseInt(price)).toString()
    //     // res.quantity = (parseInt(res.quantity) + parseInt(quantity)).toString()
    //   }
    // })


  }



  segmentChange(ev) {

    // this.shared.users.forEach((res) => {
    //   this.oldItems.push(res)
    // }); 
    console.log(ev.detail.value)

    this.newstockId = document.getElementById("newstock");
    this.oldstockId = document.getElementById("oldstock");

    if (ev.detail.value == "1") {
      console.log(this.newstockId)
      this.oldstockId.style.display = "none"
      this.newstockId.style.display = "block"
    }
    if (ev.detail.value == "2") {

      this.oldstockId.style.display = "block"
      this.newstockId.style.display = "none"
    }
  }


  constructor(public firebase: Firestore, private popCtrl: PopoverController, public shared: SharedService, private router?: Router, private _location?: Location) {
    // (this.shared.users.forEach((res) => {
    //   this.oldItems.push(res)
    // }))
    let fire;

    if(this.oldItems.length==0)
    {
      this.oldItems.push(shared.users[0])
    }

    // this.oldItems[0].name="fetching"
    this.getItems().subscribe((res)=>{
      fire=res;  
      this.oldItems = fire  
      console.log("old items",this.oldItems)
      this.firstItem = this.oldItems[0].name;
      // if(this.oldItemToChange==null){
      //   this.oldItemToChange = this.firstItem
  
      // }
  
      // this.oldItemToChange =this.firstItem
      console.log(fire)
    })


    console.log(this.oldItems)
    // if (this.oldItems) {
    //   this.firstItem = this.oldItems[0].name;

    // }
    // console.log(this.firstItem)
    // if(this.oldItemToChange==null){
    //   this.oldItemToChange = this.firstItem

    // }

  }


  ngOnInit(): void {



  }
  selectOlditem(ev) {
    console.log(ev.detail.value)
    this.oldItemToChange = ev.detail.value;
  }
  OnKeyUp() {
    console.log("yo")
  }


  async editcard(index: any) {
    console.log(this.shared.users[index]);

    const popover = await this.popCtrl.create({
      component: PopoverPage,
      componentProps: {
        custom_id: this.shared.users[index],
        i: index
      },
      backdropDismiss: false

    })
    return await popover.present()
  }


  async editSoledCard(arrs: any, index: any) {
    console.log(this.shared.users[index]);

    const popover = await this.popCtrl.create({
      component: SoledPopoverPage,
      componentProps: {
        custom_id: this.shared,
        i: index
      }

    })
    return await popover.present()
  }













  result: any
  complete() {
    this.result = document.getElementById("cards");
    this.result.style.display = "none";
  }
  fetch() {
    this.result = document.getElementById("cards");

    if (this.result.style.display === "block") {

      this.result.style.display = "none";
    }
    else {
      this.result.style.display = "block";

    }

  }
  delete(index: any): void {
    this.shared.users.splice(index, 1);
    // console.log(index);

  }

  deleteSoledItems(index: any) {
    this.shared.soledItems.splice(index, 1);

  }

  // sendData(a:any,b:any){
  //   // this.shared.addUser(a,b);
  //   this.shared.getdata(a,b);
  // }


  // getMessage() {
  //   // this.message = this.shared.getMessage();
  //   console.log(this.shared.users);
  //   // this.shared.setItems();
  // }
  initialize(name: any, price: any, quantity: any) {

    this.shared.users.forEach((va) => {
      if (va.name == name) {
        alert("are pakit pehle se hai")

        throw new Error("kya hai re pakit")
      }
    })
    for (var i = 0; i < price.length; i++) {
      console.log(price[i])
      if (price[i] == 'e') {
        price = Array.from(price);

        price.splice(i, 1)
        // console.log(price)
        price = price.join('')
      }
      if (price[i] == '-') {
        price = Array.from(price);

        price.splice(i, 1)
        // console.log(price)
        price = price.join('')
      }
    }


    for (var i = 0; i < quantity.length; i++) {
      console.log(quantity[i])
      if (quantity[i] == 'e') {
        quantity = Array.from(quantity);

        quantity.splice(i, 1)
        // console.log(price)
        quantity = quantity.join('')
      }
      if (quantity[i] == '-') {
        quantity = Array.from(quantity);

        quantity.splice(i, 1)
        // console.log(quantity)
        quantity = quantity.join('')
      }
    }

    this.message = "created";
    if (name == '' || price == '' || quantity == '') {
      if (price == '' || quantity == '') {
        console.log("kuch tho gadbad hai daya")
      }
      alert("please inpute some values")
      throw new Error("achha hua")
      console.log("ye tho khali hai", name, price, quantity)

    }
    // console.log(price.length)


    this.shared.addUser(name, price, quantity);

    this.getItems().subscribe((res) => {
      this.firebaseDate = res;

      // console.log("firebase",this.firebaseDate)

      for (let i = 0; i < this.firebaseDate.length; i++) {
        this.data(this.firebaseDate[i].idoffirebase)
        this.shared.users[i] = this.firebaseDate[i];
      }
    })
    setTimeout(() => {
      this.shared.users.forEach((res) => {
        this.update(res.idoffirebase, res)


      });
    }, (400))

    
    this.shared.addNewStockOnDate(name, price, quantity)

  }




  async data(a) {
    const app = initializeApp({ "projectId": "minhaj-bhaiya-app", "appId": "1:1040599161229:web:ba1d4642015bdb872605c4", "storageBucket": "minhaj-bhaiya-app.appspot.com", "apiKey": "AIzaSyChjOGMG40DrpIL_Rc4RaA8L40BHQMYp6w", "authDomain": "minhaj-bhaiya-app.firebaseapp.com", "messagingSenderId": "1040599161229", "measurementId": "G-GJ4SB8T3RV" })
    const db = getFirestore(app);

    const docRef = doc(db, "minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock", a);
    const docSnap = await getDoc(docRef);
    //  console.log(docSnap.data())
  }


  async update(id, data) {

    try {
      const notesRef = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock');
      const docRef = doc(notesRef, id); // Replace with your desired document ID
      await updateDoc(docRef, data);
      console.log("New fields added successfully");
    }
    
    catch (error) {
      console.log("there was an error but i dont know where")
    }
  }

  getItems() {
    const notesRefForItems = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock')
    //  const db = getFirestore(app)
    return collectionData(notesRefForItems, { idField: 'idoffirebase' })
    // this.getItems().subscribe((res)=>
    // console.log(res));
  }
  refresh() {
    window.location.reload();

  }

  async checkNumber(price) {
    for (var i = 0; i < price.length; i++) {
      console.log(price[i])
      if (price[i] == 'e') {
        price = Array.from(price);

        price.splice(i, 1)
        console.log(price)
        price = price.join('')
      }
      if (price[i] == '-') {
        price = Array.from(price);

        price.splice(i, 1)
        console.log(price)
        price = price.join('')
      }
      return price
    }


  }



}















