import { DetailspopPage } from './../components/detailspop/detailspop.page';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { Tab2Page } from './../tab2/tab2.page';
import { Renderer2, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import { NgFor } from '@angular/common';
import { SharedService } from '../src/app/services/shared.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverPage } from '../components/popover/popover.page';
import { Tab4Page } from '../tab4/tab4.page';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getMetadata, uploadBytesResumable, getDownloadURL } from "firebase/storage";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {
  imageurl;
  path;
  upload(event) {
    this.path = event.target.files[0]
    // console.log(event.target.files[0])
  }
  UploadImage() {
    // // this.path.name="marble name"
    console.log(this.path)
    const storage = getStorage();
    // const storageRef = ref(storage, 'images/');

    // 'file' comes from the Blob or File API
    // uploadBytes(storageRef, this.path).then((snapshot) => {
    //   console.log('Uploaded a blob or file!', snapshot);
    // });




    var nameofimage="great"
    const forestRef = ref(storage, 'images/'+nameofimage);

    // getMetadata(forestRef)
    //   .then((metadata) => {
    //     console.log(metadata)
    //     // Metadata now contains the metadata for 'images/forest.jpg'
    //   })
    //   .catch((error) => {
    //     // Uh-oh, an error occurred!
    //   });

      
const uploadTask = uploadBytesResumable(forestRef, this.path);

uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    if(progress==100){
      console.log("perfect")
    }
   
  }, 
  (error) => {
    console.log(error)
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL +' ' + "https://www.youtube.com/watch?v=iEcokZOv5UY");
      this.imageurl=downloadURL

    });
  }

)



  }


  arr: any;

  soled_items: any;
  firebasedata;
  noice(n: any) {
    console.log(n)
  }

  constructor(public tab4: Tab4Page, private http: HttpClient, private router: Router, private ss: SharedService, private renderer: Renderer2, private popctrl: PopoverController, private modalctrl: ModalController, public firebase: Firestore) {
    // this.update("G05ZVvras235z7VrvliS",this.users[0])

    this.tab4.getItems().subscribe((res) => {
      this.firebasedata = res;
      this.arr = res;
      console.log(this.arr)
    })

  }

  // async update(id, data) {
  //   try {
  //     const notesRef = collection(this.firebase, 'minhajbhaiyaapp2/YdSarGI7wYeL6JQJ12xN/items_in_stock');
  //     const docRef = doc(notesRef, id); // Replace with your desired document ID
  //     await updateDoc(docRef, data);
  //     console.log("New fields added successfully");
  //   }
  //   catch (error) {
  //     console.log("there was an error but i dont know where")
  //   }
  // }

  users = [
    {
      name: 'marble name', idoffirebase: 1, i: [
        {
          price: "120", quantity: '12',
        },
      ], quantity: '12', sellingPrice: "0", sellingQuantity: "0",imageurl:""

    },
  ]
  ngAfterViewInit() {

    console.log("ngafterviewinit")
    // this.arr = this.ss.users;
    this.arr = this.firebasedata
    this.soled_items = this.ss.soledItems;
  }

  async openDetails(a, b) {
    console.log("index and arr", a, a.idoffirebase)


    // const popover = await this.popctrl.create({
    //   component: PopoverPage,
    //   componentProps: {
    //     custom_id: a,
    //     i: b,
    //   },
    //   backdropDismiss: false

    // })

    const popover = await this.popctrl.create({
      component: PopoverPage,
      componentProps: {
        custom_id: a,
        i: a.idoffirebase,
      },
      backdropDismiss: false

    })
    await popover.present();


    const { data, role } = await popover.onDidDismiss();
    console.log("data and a", data, this.arr[b])
    this.arr[b] = data;

    var count = 0;
    for (var o = 0; o < this.arr[b].i.length; o++) {
      count += parseInt(this.arr[b].i[o].quantity)

    }
    this.arr[b].quantity = count;


    this.tab4.update(this.firebasedata[b].idoffirebase, this.arr[b]).then((res) => {
      console.log("updated", this.arr[b])
    })





    console.log(this.arr);
  }
}
