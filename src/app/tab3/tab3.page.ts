
import { Component, OnInit } from '@angular/core';
import * as lodash from 'lodash';
import { NgForm } from '@angular/forms';

import { AlertController } from '@ionic/angular';
import { SharedService } from '../src/app/services/shared.service';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  sellingStock = [];

  async presentAlert(a, b) {
    const alert = await this.alertController.create({
      header: a + ' ' + b,

      buttons: ['OK'],
    });

    await alert.present();
  }
  public items = [];
  public data = [];
  users = [];
  Firestoredata;
  constructor(private alertController?: AlertController, public shared?: SharedService, public firebase?: Firestore) {

    shared.getItems().subscribe((res) => {
      this.Firestoredata = res;
      this.users = [];
      for (let i = 0; i < this.Firestoredata.length; i++) {
        this.users.push(this.Firestoredata)
        console.log(this.users)

      }
      this.data = this.Firestoredata;
      // for (this.i = 0; this.i < this.Firestoredata.length; this.i++) {
      //   this.data[this.i] = this.Firestoredata[this.i].name;
      // }
      this.results = [...this.data];
    })




  }

  i: any;
  public results = [];
  public ngOnInit(): void {
    // this.items.push(1)
    // this.delete(1)

    console.log("here")


  }




  sellingQuantityUpdate(ev, result) {
    // console.log(ev.value)
    // console.log(index)
    // this.shared.users[index].sellingQuantity = ev.value;

    console.log(result)
    let o = 0;
    this.sellingStock.forEach((res) => {
      if (res.idoffirebase == result.idoffirebase) {
        res.sellingQuantity = ev.value
        o++;
      }
    })
    if (o == 0) {


      this.sellingStock.push({
        "idoffirebase": result.idoffirebase,
        "sellingPrice": 0,
        "sellingQuantity": ev.value,
        "name": result.name
      })
    }
    console.log(this.sellingStock)
    // this.update(result.idoffirebase,{})

  }

  sellingPriceUpdate(ev, result) {
    //     for(var i=0;i<ev.value.length;i++)
    // {
    //   console.log(ev.value[i])
    //   if(ev.value[i]=='e'){
    //     ev.value= Array.from(ev.value);

    //     ev.value.splice(i,1)
    //     // console.log(price)
    //     ev.value=ev.value.join('')   
    //   }
    //   if(ev.value[i]=='-')
    //   {
    //     ev.value= Array.from(ev.value);

    //     ev.value.splice(i,1)
    //     console.log(ev.value)
    //     ev.value=ev.value.join('')
    //   }
    // }

    // console.log(ev.value)
    // this.shared.users[index].sellingPrice = ev.value;
    // console.log(index)
    let o = 0;
    this.sellingStock.forEach((res) => {
      if (res.idoffirebase == result.idoffirebase) {
        res.sellingPrice = ev.value
        o++;
      }
    })
    if (o == 0) {


      this.sellingStock.push({
        "idoffirebase": result.idoffirebase,
        "sellingPrice": ev.value,
        "sellingQuantity": 0,
        "name": result.name
      })
    }
    console.log(this.sellingStock)

  }


  handleRefresh(event) {
    this.ngOnInit();
    setTimeout(() => {
      this.results = [...this.data];
      // calls to load data go here
      event.target.complete();

    }, 200);
  }
  async showAlert() {
    const alert = await this.alertController.create({

    });
    await alert.present;
    console.log("alert")

  }
  // onSubmit() {
  // for(var i=0;i<price.length;i++)
  // {
  //   console.log(price[i])
  //   if(price[i]=='e'){
  //     price= Array.from(price);

  //     price.splice(i,1)
  //     // console.log(price)
  //     price=price.join('')   
  //   }
  //   if(price[i]=='-')
  //   {
  //     price= Array.from(price);

  //     price.splice(i,1)
  //     console.log(price)
  //     price=price.join('')
  //   }
  // }


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


  //     let cart: any = []

  // console.log(this.items)


  //     this.items.forEach(element => {
  //       if (this.shared.users[element].sellingQuantity == '' || this.shared.users[element].sellingQuantity == '0') {

  //         this.presentAlert("selling quantity is 0 of", this.shared.users[element].name);
  //         throw new Error("Break the loop.")
  //       }
  //       if (this.shared.users[element].sellingPrice == '' || this.shared.users[element].sellingPrice == '0') {

  //         this.presentAlert("selling price is 0 of", this.shared.users[element].name);
  //         throw new Error("Break the loop.")
  //       }
  //       for (var i = 0; i < this.shared.users[element].sellingQuantity.length; i++) {
  //         console.log(this.shared.users[element].sellingQuantity[i])
  //         if (this.shared.users[element].sellingQuantity[i] == 'e') {
  //           let a;
  //           a = Array.from(this.shared.users[element].sellingQuantity);

  //           a.splice(i, 1)
  //           // console.log(price)
  //           this.shared.users[element].sellingQuantity = a.join('')
  //         }
  //         if (this.shared.users[element].sellingQuantity[i] == '-') {
  //           let a;
  //           a = Array.from(this.shared.users[element].sellingQuantity);

  //           a.splice(i, 1)
  //           console.log(this.shared.users[element].sellingQuantity)
  //           this.shared.users[element].sellingQuantity = a.join('')
  //         }
  //       }
  //       for (var i = 0; i < this.shared.users[element].sellingPrice.length; i++) {
  //         console.log(this.shared.users[element].sellingPrice[i])
  //         if (this.shared.users[element].sellingPrice[i] == 'e') {
  //           let a;
  //           a = Array.from(this.shared.users[element].sellingPrice);

  //           a.splice(i, 1)
  //           // console.log(price)
  //           this.shared.users[element].sellingPrice = a.join('')
  //         }
  //         if (this.shared.users[element].sellingPrice[i] == '-') {
  //           let a;
  //           a = Array.from(this.shared.users[element].sellingPrice);

  //           a.splice(i, 1)
  //           console.log(this.shared.users[element].sellingPrice)
  //           this.shared.users[element].sellingPrice = a.join('')
  //         }
  //       }



  //       console.log(this.shared.users[element])
  //       let q = Number(this.shared.users[element].quantity) - Number(this.shared.users[element].sellingQuantity)

  //       if (q < 0) {
  //         this.presentAlert("selling quantiity is more than available of", this.shared.users[element].name);
  //         throw new Error("Break the loop.")

  //       }


  //       this.shared.users[element].quantity = q.toString();

  //       // console.log(this.shared.users[element])
  //       cart.push({
  //         name: this.shared.users[element].name,
  //         quantity: this.shared.users[element].sellingQuantity,
  //         price: this.shared.users[element].sellingPrice
  //       })
  //       console.log(this.shared.users[element].quantity)
  //     });


  //     for (let n = 0; n < cart.length; n++) {
  //       // console.log(cart[n].name, cart[n].quantity, cart[n].price)

  //       this.shared.soledUpdate(cart[n].name, cart[n].price, cart[n].quantity)
  //       console.log(this.shared.soledItems)
  //     }

  //     // console.log(this.shared.soledItems)

  //     this.items = [];

  //     if (this.items.length == 0) {
  //       document.getElementById("sellButton").style.display = "none";
  //     }

  //     this.shared.users.forEach((res) => {
  //       this.update(res.idoffirebase, { i: res.i }).then(() => {
  //         console.log("sucess")
  //       })
  //     })



  //   }



  onSubmit() {
    // this.shared.addsoledItemOnDate("a","10","2")

    let cart: any = []

    console.log("sellingstock", this.sellingStock, "items", this.items)


    // this.items.forEach(element => {
    //   if (element.sellingQuantity == '' || element.sellingQuantity == '0') {

    //     this.presentAlert("selling quantity is 0 of", element.name);
    //     throw new Error("Break the loop.")
    //   }
    //   if (element.sellingPrice == '' || element.sellingPrice == '0') {

    //     this.presentAlert("selling price is 0 of", element.name);
    //     throw new Error("Break the loop.")
    //   }
    //   for (var i = 0; i < element.sellingQuantity.length; i++) {
    //     console.log(element.sellingQuantity[i])
    //     if (element.sellingQuantity[i] == 'e') {
    //       let a;
    //       a = Array.from(element.sellingQuantity);

    //       a.splice(i, 1)
    //       // console.log(price)
    //       element.sellingQuantity = a.join('')
    //     }
    //     if (element.sellingQuantity[i] == '-') {
    //       let a;
    //       a = Array.from(element.sellingQuantity);

    //       a.splice(i, 1)
    //       console.log(element.sellingQuantity)
    //       element.sellingQuantity = a.join('')
    //     }
    //   }
    //   for (var i = 0; i < element.sellingPrice.length; i++) {
    //     console.log(element.sellingPrice[i])
    //     if (element.sellingPrice[i] == 'e') {
    //       let a;
    //       a = Array.from(element.sellingPrice);

    //       a.splice(i, 1)
    //       // console.log(price)
    //       element.sellingPrice = a.join('')
    //     }
    //     if (element.sellingPrice[i] == '-') {
    //       let a;
    //       a = Array.from(element.sellingPrice);

    //       a.splice(i, 1)
    //       console.log(element.sellingPrice)
    //       element.sellingPrice = a.join('')
    //     }
    //   }



    //   console.log(element)
    //   let q = Number(element.quantity) - Number(element.sellingQuantity)

    //   if (q < 0) {
    //     this.presentAlert("selling quantiity is more than available of", element.name);
    //     throw new Error("Break the loop.")

    //   }


    //   // element.quantity = q.toString();

    //   // console.log(this.shared.users[element])
    //   cart.push({
    //     name:element.name,
    //     quantity: element.sellingQuantity,
    //     price:element.sellingPrice
    //   })
    //   console.log(element.quantity)
    // });





































    for (var p = 0; p < this.items.length; p++) {
      var element = this.sellingStock[p];
      if (element.sellingQuantity == '' || element.sellingQuantity == '0') {

        this.presentAlert("selling quantity is 0 of", element.name);
        throw new Error("Break the loop.")
      }
      if (element.sellingPrice == '' || element.sellingPrice == '0') {

        this.presentAlert("selling price is 0 of", element.name);
        throw new Error("Break the loop.")
      }
      for (var i = 0; i < element.sellingQuantity.length; i++) {
        console.log(element.sellingQuantity[i])
        if (element.sellingQuantity[i] == 'e') {
          let a;
          a = Array.from(element.sellingQuantity);

          a.splice(i, 1)
          // console.log(price)
          element.sellingQuantity = a.join('')
        }
        if (element.sellingQuantity[i] == '-') {
          let a;
          a = Array.from(element.sellingQuantity);

          a.splice(i, 1)
          console.log(element.sellingQuantity)
          element.sellingQuantity = a.join('')
        }
      }
      for (var i = 0; i < element.sellingPrice.length; i++) {
        console.log(element.sellingPrice[i])
        if (element.sellingPrice[i] == 'e') {
          let a;
          a = Array.from(element.sellingPrice);

          a.splice(i, 1)
          // console.log(price)
          element.sellingPrice = a.join('')
        }
        if (element.sellingPrice[i] == '-') {
          let a;
          a = Array.from(element.sellingPrice);

          a.splice(i, 1)
          console.log(element.sellingPrice)
          element.sellingPrice = a.join('')
        }
      }



      var elementofitems = this.items[p]
      let changingQuantity = element.sellingQuantity
      let indextoremove = []
      console.log("ike andar", element, this.items[p].i[0])
      for (let indexForIofElementofitems = 0; indexForIofElementofitems < elementofitems.i.length; indexForIofElementofitems++) {

        let e = elementofitems.i[indexForIofElementofitems];


        changingQuantity = (parseInt(e.quantity) - parseInt(changingQuantity))
        console.log("aayafor me", changingQuantity)



        if (changingQuantity <= 0) {
          indextoremove.push(indexForIofElementofitems);

        }
        console.log("indexes", changingQuantity, indextoremove)

        if (changingQuantity > 0) {
          e.quantity = changingQuantity.toString()
          console.log("indexes", changingQuantity, indextoremove)


          break;
        } changingQuantity = -(changingQuantity)
        console.log(changingQuantity)
      }

      if (indextoremove.length > 0) {
        this.items[p].i.splice(0, indextoremove.length)
        console.log(this.items[p])

      }




      let q = elementofitems.quantity - Number(element.sellingQuantity)
      console.log(q)

      if (q < 0) {
        this.presentAlert("selling quantiity is more than available of", element.name);
        throw new Error("Break the loop.")

      }



      elementofitems.quantity = q.toString();

      // console.log(this.shared.users[element])
      cart.push({
        name: element.name,
        quantity: element.sellingQuantity,
        price: element.sellingPrice
      })
      this.shared.update(this.items[p].idoffirebase, this.items[p])
    }


    console.log("cart ke andar",cart)
    this.shared.addsoledItemOnDate(cart)


    this.items = [];

    if (this.items.length == 0) {
      document.getElementById("sellButton").style.display = "none";
    }

    // this.shared.users.forEach((res) => {
    //   this.update(res.idoffirebase, { i: res.i }).then(() => {
    //     console.log("sucess")
    //   })
    // })

    // this.shared.getItems().subscribe((res) => {
    //   console.log(res)
    // })

  }




  async update(id, data) {

    try {

      const notesRef = collection(this.firebase, 'minhajbhaiyaapp2');
      const docRef = doc(notesRef, id); // Replace with your desired document ID



      await updateDoc(docRef, data);
      console.log("New fields added successfully");



      // await updateDoc(docRef, this.ss.users[0]);
      // console.log("New fields added successfully");

    } catch (error) {
      console.log("there was an error but i dont know where")
    }

    // try {
    //   const notesRef = collection(this.firebase, 'notes/bKf4vNa9Tr90DUg7VxFR/orders');

    //   for (const order of this.ss.users) {
    //     const docRef = doc(notesRef, this.generateDocumentId()); // Use collection reference here

    //     await updateDoc(docRef, order);
    //     console.log("Order added successfully:", order.orderId);
    //   }
    // } catch (error) {
    //   console.error("Error adding orders:", error);
    // }
  }

  sell() {
    console.log("yo")
  }

  selling() {
    let x = document.getElementById("quantity");
    console.log(x)
  }
  addIndexOfOrders(j) {
    this.showAlert()

    this.items.push(j);
    console.log("items", this.items)



    this.items = lodash.uniqWith(this.items, lodash.isEqual);
    console.log("after lodash", this.items)
    let itemsLength = this.items.length;


    // this.items.forEach(element => {
    //   console.log(this.shared.users[element])
    // });
    // for(let itemslist=0;itemslist<itemsLength;itemslist++)
    // {
    //   console.log(this.shared.users[])
    // }
    if (this.items != null) {
      document.getElementById("sellButton").style.display = "block";
    }
  }

  private RemoveElementFromArray(element: number) {
    this.items.forEach((value, index) => {
      if (value == element) this.items.splice(index, 1);
    });

  }
  delete(index) {
    console.log(index)
    // this.cart.splice(index,1)
    this.RemoveElementFromArray(index)


    console.log(this.items)
    if (this.items.length == 0) {
      document.getElementById("sellButton").style.display = "none";
    }

  }


  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
  id: number;
  name: string;
}

