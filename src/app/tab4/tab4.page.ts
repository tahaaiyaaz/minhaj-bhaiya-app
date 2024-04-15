import { SharedService } from 'src/app/src/app/services/shared.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common'
import { Firestore, addDoc, collectionData, doc, getDoc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { FirebaseAppModule, initializeApp } from '@angular/fire/app';
import { Observable } from 'rxjs';
// import { format, parseISO } from 'date-fns';
// import {format} from 'date-fns';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  newstockId;
  oldstockId;
  todaydate = new Date().toISOString();
  newStock = [{
    name: "qw",
    Price: "wq",
    Quantity: 'qw',
    date: "wq"
  }]

  solditems = [{
    name: "qa",
    sellingPrice: "aa",
    sellingQuantity: "string",
    date: "string"
  }];
  soldid;
  newstockid;

  date: any;
  yearToFetch;
  monthToFetch;
  dateToFetch;
  firebaseDate;

  constructor(public datepipe?: DatePipe, public firebase?: Firestore, public ss?: SharedService) {


    // this.update("YZZJQ2BEvuGZwYOPHdaD").then((res)=>{
    //   console.log("updated",res)
    // })
    // ss.users=users;
    this.getItems().subscribe((res) => {
      this.firebaseDate = res;

      // console.log("firebase",this.firebaseDate)

      for (let i = 0; i < this.firebaseDate.length; i++) {
        this.data(this.firebaseDate[i].idoffirebase)
        this.ss.users[i] = this.firebaseDate[i];
      }
    })
    setTimeout(() => {
      this.ss.users.forEach((res) => {
        this.update(res.idoffirebase, res)


      });
    }, (400))


  }

  async ngOnInit() {
    // this.addNote(this.ss.users[0]);
    // this.getItems().subscribe((res)=>{console.log(res)})


  }

  async data(a) {
    const app = initializeApp({ "projectId": "minhaj-bhaiya-app", "appId": "1:1040599161229:web:ba1d4642015bdb872605c4", "storageBucket": "minhaj-bhaiya-app.appspot.com", "apiKey": "AIzaSyChjOGMG40DrpIL_Rc4RaA8L40BHQMYp6w", "authDomain": "minhaj-bhaiya-app.firebaseapp.com", "messagingSenderId": "1040599161229", "measurementId": "G-GJ4SB8T3RV" })
    const db = getFirestore(app);

    const docRef = doc(db, "minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock", a);
    const docSnap = await getDoc(docRef);
    //  console.log(docSnap.data())
  }
  addonlyonce() {
    for (var i = 0; i < this.ss.users.length; i++) {
      this.addNote(this.ss.users[i]).then((res) => {
        // console.log("added",res)
      })
    }
  }

  getItems() {
    const notesRefForItems = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock')
    //  const db = getFirestore(app)
    return collectionData(notesRefForItems, { idField: 'idoffirebase' })
    // this.getItems().subscribe((res)=>
    // console.log(res));
  }

  getNotes() {
    const notesRef = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock');

    return collectionData(notesRef, { idField: 'id' });
  }

  //   // getItems()
  //   // {
  //   //   const notesRefForItems = collection(this.firestore,'notes/bKf4vNa9Tr90DUg7VxFR/orders')
  //   //   return collectionData(notesRefForItems)
  //   // }


  //   // getNoteById(id:acny): Observable<Note> {
  //   //   const noteDocRef = doc(this.firestore, `notes/bKf4vNa9Tr90DUg7VxFR/orders/egPJMU7yPNWo0Uw2mcGh`);
  //   //   return docData(noteDocRef, { idField: 'id', }) as Observable<Note>;
  //   // }

  addNote(note) {
    const notesRef = collection(this.firebase, 'minhajbhaiyaapp2');
    return addDoc(notesRef, note);
  }

  // async add(){
  //   const notesRef = collection(this.firestore, 'notes/bKf4vNa9Tr90DUg7VxFR/orders');
  //   const docRef = doc(notesRef,"egPJMU7yPNWo0Uw2mcGh"); // Replace with your desired document ID
  // deleteNote(note: Note) {
  //   //   const noteDocRef = doc(this.firestore, `notes/${note.id}`);
  //   //   return deleteDoc(noteDocRef);
  //   // }

  //   // updateNote(note: Note) {
  //   //   let vro=this.bro
  //   //   const noteDocRef = doc(this.firestore, `notes/bKf4vNa9Tr90DUg7VxFR/orders/egPJMU7yPNWo0Uw2mcGh`);
  //   //   return updateDoc(noteDocRef, {note:this.ss.orders[0]});
  //   // }

  //   // updateNote(note: Note) {
  //   //   this.bro.push({"noice":"mn"})
  //   //   const noteDocRef = doc(this.firestore, `notes/bKf4vNa9Tr90DUg7VxFR/orders/egPJMU7yPNWo0Uw2mcGh`);
  //   //   return updateDoc(noteDocRef, { title: this.bro, text: note.text });
  //   // }

  async update(id, data) {

    try {

      const notesRef = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock');
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


  
  i = "0";
  generateDocumentId() {
    const timestamp = Date.now();
    return `order_${timestamp}`;
  }











  change(ev) {
    // this.newstockid = document.getElementById("solditems");
    // this.soldid = document.getElementById("newStock");
    // this.soldid.style.display = "none"
    // this.newstockid.style.display = "none"
    // this.getItems().subscribe((res)=>{
    //   console.log(res)
    // })
    this.date = formatDate(ev.detail.value, 'YYYY-MM-dd', 'en-US').split('-')
    this.yearToFetch = this.date[0]
    this.monthToFetch = this.date[1]
    this.dateToFetch = this.date[2]
    // console.log(this.date);
    console.log(this.yearToFetch + this.monthToFetch + this.dateToFetch)

    this.solditems = null;
    this.newStock = null;
    for (var i = 0; i < this.ss.soledItems.length; i++) {
      if (this.ss.soledItems[i].year == this.yearToFetch) {
        if (this.ss.soledItems[i].month == this.monthToFetch) {

          if (this.ss.soledItems[i].date == this.dateToFetch) {

            if (this.solditems == null) {
              this.solditems = [{
                name: "",
                sellingPrice: "",
                sellingQuantity: "",
                date: ""
              }];
            }

            this.solditems.push(this.ss.soledItems[i])
            console.log("soled items ka hai", this.solditems, i)
            // this.soldid.style.display="flex"

          }


        }
      }
    }

    for (var i = 0; i < this.ss.newStockOnDate.length; i++) {

      if (this.ss.newStockOnDate[i].year == this.yearToFetch) {
        if (this.ss.newStockOnDate[i].month == this.monthToFetch) {

          if (this.ss.newStockOnDate[i].date == this.dateToFetch) {

            if (this.newStock == null) {
              this.newStock = [{
                name: "",
                Price: "",
                Quantity: "",
                date: ""
              }];

            }

            console.log("ss.ke andar ka new stock hai", this.ss.newStockOnDate[i])
            this.newStock.push(this.ss.newStockOnDate[i])
            console.log("newstock ka stock hai", this.newstockid)
            // this.newstockid.style.display = "block"

          }


        }
      }
    }
    // console.log(this.solditems)

    // if (this.solditems == null) {
    //   this.soldid.style.display = "none"

    // }

    // if (this.solditems != null) {
    //   this.soldid.style.display = "block"

    // }

    // if (this.newStock != null) {
    //   this.newstockid.style.display = "block"

    // }


    console.log(this.newStock, this.solditems)

    // if (this.newStock == null) {
    //   this.newstockid.style.display = "none"
    //   console.log("intresting")

    // }
  }




  // this.ss.soledItems.forEach( (res) =>{

  // console.log(res.date,res.month,res.year)





  // })
  // }





  check() {

    for (var i = 0; i < this.ss.soledItems.length; i++) {

      if (this.ss.soledItems[i].year == this.yearToFetch) {
        if (this.ss.soledItems[i].month == this.monthToFetch) {

          if (this.ss.soledItems[i].date == this.dateToFetch) {

            console.log(this.ss.soledItems[i])
            // this.solditems=this.ss.soledItems[i]
            break
          }

          else {
            this.solditems = null;
          }
        }

        else {
          this.solditems = null;
        }

      }
      else {
        console.log("here")
        this.solditems = null;
      }
    }

  }


  segmentChange(ev) {

    // this.shared.users.forEach((res) => {
    //   this.oldItems.push(res)
    // // });
    // console.log(ev.detail.value)
    // this.newstockId = document.getElementById("newstock");
    // this.oldstockId = document.getElementById("oldstock");
    // if (ev.detail.value == "newstock") {

    //   this.oldstockId.style.display = "none"
    //   this.newstockId.style.display = "block"
    // }
    // if (ev.detail.value == "oldmall") {

    //   this.oldstockId.style.display = "block"
    //   this.newstockId.style.display = "none"
    // }
    
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

}
