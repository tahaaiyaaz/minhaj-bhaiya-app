import { Injectable, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common'
import { Firestore, addDoc, collection, collectionData, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { updateCurrentUser } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {

  firebasedata;
  idOfFireBaseForsoleditemOnDate;
  ngOnInit() { }
  addNote(note) {
    const notesRef = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock');
    return addDoc(notesRef, note);
  }
  idOfFireBaseForNewStockOnDate;

  constructor(public firebase: Firestore) {
    this.getItems().subscribe((res) => {
      this.firebasedata = res;
      this.users = [];
      for (let i = 0; i < this.firebasedata.length; i++) {
        // this.users.push(this.firebasedata)
        // console.log(this.users)

        this.users[i] = this.firebasedata[i]
        // console.log(this.users)
      }


    })

    this.getsoledItemsOnDate().subscribe((res) => {
      this.idOfFireBaseForsoleditemOnDate = (res.length ).toString();
      console.log(res)
    })



    this.getNewItemsOnDate().subscribe((res) => {
      this.idOfFireBaseForNewStockOnDate = (res.length + 1).toString();
      console.log(res)
    })
    this.date = new Date().toISOString();
    this.today = formatDate(this.date, 'YYYY-MM-dd', 'en-US').split('-');

    this.thisyear = this.today[0];
    this.thismonth = this.today[1];
    this.thisdate = this.today[2];
  }

  //   users= [
  //     {
  //     name : 'marble name', price:"120" ,quantity:'12' ,sellingPrice:"1000" ,sellingQuantity:"0"
  //     },
  //     {
  //       name : '2nd marble name' ,price:"20",quantity:'10',sellingPrice:"1000",sellingQuantity:"0"
  //     }
  // ];

  users = [
    {
      name: 'marble name', idoffirebase: 1, i: [
        {
          price: "120", quantity: '12',
        },
      ], quantity: '12', sellingPrice: "0", sellingQuantity: "0",imageurl: ""
    },
    {
      name: '2nd marble name', idoffirebase: 2, i: [
        {
          price: "12", quantity: '12',
        },
      ],
      quantity: '12', sellingPrice: "0", sellingQuantity: "0",imageurl:""
    }
  ];






  addNewStockOnDate(name, price, quantity) {
    this.addNewItemOnDate(name, price, quantity)

  }




  soledItems = [
    {
      name: 'ha', sellingPrice: "1000", sellingQuantity: "8", date: "05", month: "02", year: "2024"
    },
    {
      name: 'ha', sellingPrice: "1000", sellingQuantity: "8", date: "05", month: "02", year: "2024"
    },
    {
      name: 'ha', sellingPrice: "1000", sellingQuantity: "8", date: "05", month: "02", year: "2024"
    },
    {
      name: 'taha', sellingPrice: "1000", sellingQuantity: "8", date: "05", month: "01", year: "2023"
    }

  ];
  soldChange(name: any, price: any, quantity: any, index: any) {
    console.log("inside shared services")
    this.soledItems[index].name = name;
    this.soledItems[index].sellingPrice = price;
    this.soledItems[index].sellingQuantity = quantity;

  }

  date;
  today;

  thisyear;
  thismonth;
  thisdate;


  soledUpdate(name: string, sellingPrice: string, sellingQuantity: string) {
    this.soledItems.push({ name, sellingPrice, sellingQuantity, date: this.thisdate, month: this.thismonth, year: this.thisyear });

  }


  addUser(name: string, price: string, quantity: string,imgurl) {
    // this.users.push({ name, quantity, idoffirebase: 9, sellingPrice: price, sellingQuantity: quantity, i: [{ price: price, quantity: quantity }] ,imageurl:"mdm"});
    this.addNote({
      name: name,
      quantity: quantity,
      idoffirebase: 9,
      sellingPrice: "0",
      sellingQuantity: "0",
      i: [{ price: price, quantity: quantity }],
      imageurl:imgurl
    }).then(() => {
      this.getItems()

    })
  }

  getItems() {
    const notesRefForItems = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock')
    //  const db = getFirestore(app)
    return collectionData(notesRefForItems, { idField: 'idoffirebase' })
    // this.getItems().subscribe((res)=>
    // console.log(res));
  }
  //end of practice
  changeAllParameters(name: any, price: any, quantity: any, index: any) {
    this.users[index].name = name;

    this.users[index].quantity = quantity;
  }




  changeIinusers(name, price, quantity) {
    console.log(this.users)

    this.users.forEach((ev) => {


      if (ev.name == name) {
        let finalquantity = 0;
        let index;
        ev.i.push({ price: price, quantity: quantity })
        ev.i.forEach((res) => {
          finalquantity += parseInt(res.quantity);
          index++;
        })

        ev.quantity = finalquantity.toString();
        console.log("quantity", ev.quantity)


        this.update(ev.idoffirebase, ev)
        console.log("inside shadred")
      }
    })
    this.addNoteForNewItemOnDate({
      name: name,
      price: price,
      quantity: quantity,
      idoffirebase: this.idOfFireBaseForNewStockOnDate,
      date: this.thisdate,
      month: this.thismonth,
      year: this.thisyear
    }).then(() => {

    })


  }


  async update(id, data) {
    try {
      const notesRef = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock');
      const docRef = doc(notesRef, id); // Replace with your desired document ID
      await updateDoc(docRef, data);
      console.log("New fields updated successfully");
    }
    catch (error) {
      console.log("there was an error but i dont know where")
    }
  }

















  //
  //
  //
  //
  //
  //
  //from here on only new items on date 
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
























  newStockOnDate = [
    {
      name: 'ha', Price: "1000", Quantity: "8", date: "01", month: "02", year: "2024"
    },
    {
      name: 'ha', Price: "1000", Quantity: "8", date: "02", month: "02", year: "2024"
    }
  ];

  addNewItemOnDate(name: string, price: string, quantity: string) {
    let idForNewItemOnDate;
    console.log("inside ss")
    // this.newStockOnDate.push({ name: name, Price: price, Quantity: quantity, date: this.thisdate, month: this.thismonth, year: this.thisyear })

    // this.users.push({ name, quantity, idoffirebase: 9, sellingPrice: price, sellingQuantity: quantity, i: [{ price: price, quantity: quantity }] });
    this.addNoteForNewItemOnDate({
      name: name,
      price: price,
      quantity: quantity,
      idoffirebase: this.idOfFireBaseForNewStockOnDate,
      date: this.thisdate,
      month: this.thismonth,
      year: this.thisyear,
      imageurl:""
    }).then(() => {
      let toupdateid;
      this.getNewItemsOnDate().subscribe((res) => {

        console.log("added succes", res)
        toupdateid = res;

        //  for(let i =0;i<toupdateid.length;i++)
        //  {
        //    this.update(toupdateid[i].idoffirebase,toupdateid)

        //  }  
        // console.log(toupdateid)
      })

    }



    )
  }

  // async add(){
  //   const notesRef = collection(this.firestore, 'notes/bKf4vNa9Tr90DUg7VxFR/orders');
  //   const docRef = doc(notesRef,"egPJMU7yPNWo0Uw2mcGh"); // Replace with your desired document ID
  // deleteNote(note: Note) {
  //   //   const noteDocRef = doc(this.firestore, `notes/${note.id}`);
  //   //   return deleteDoc(noteDocRef);
  //   // }

  async addNoteForNewItemOnDate(note) {
    const notesRef = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/new_items_on_date');
    const docRef = doc(notesRef, this.idOfFireBaseForNewStockOnDate)
    //  await addDoc(notesRef, note)
    setDoc(docRef, note)

  }

  getNewItemsOnDate() {
    const notesRefForItems = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/new_items_on_date')
    //  const db = getFirestore(app)
    return collectionData(notesRefForItems, { idField: 'idoffirebase' })
    // this.getItems().subscribe((res)=>
    // console.log(res));
  }
























  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // from here on soled items
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
















  soleditemOnDate = [
    {
      name: 'ha', Price: "1000", Quantity: "8", date: "01", month: "02", year: "2024"
    },
    {
      name: 'ha', Price: "1000", Quantity: "8", date: "02", month: "02", year: "2024"
    }
  ];


  addsoledItemOnDate(listToUpdate) {
    let idForsoledItemOnDate;

    this.addNoteForsoledItemOnDate({
      list:listToUpdate,
      idoffirebase: this.idOfFireBaseForsoleditemOnDate,
      date: this.thisdate,
      month: this.thismonth,
      year: this.thisyear
    }).then(() => {
      let toupdateid;
      this.getsoledItemsOnDate().subscribe((res) => {

        console.log("added succes", res)
        toupdateid = res;
        console.log("update id",toupdateid)

        //  for(let i =0;i<toupdateid.length;i++)
        //  {
        //    this.update(toupdateid[i].idoffirebase,toupdateid)

        //  }  
        // console.log(toupdateid)
      })

    }


    )
  }


  async addNoteForsoledItemOnDate(note) {
    console.log("soleditems ki id",this.idOfFireBaseForsoleditemOnDate)
    const notesRef = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/soled_items_on_date');
    const docRef = doc(notesRef, this.idOfFireBaseForsoleditemOnDate)
    //  await addDoc(notesRef, note)
    setDoc(docRef, note)


  }

  getsoledItemsOnDate() {
    const notesRefForItems = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/soled_items_on_date')
    //  const db = getFirestore(app)
    return collectionData(notesRefForItems, { idField: 'idoffirebase' })
    // this.getItems().subscribe((res)=>
    // console.log(res));
  }
}




