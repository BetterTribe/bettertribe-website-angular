import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FetchBlogsService {

  constructor(private firestore: AngularFirestore) { }

  getBlogs(){
    console.log("getBlogs");
    console.log(this.firestore.collection("blogs").snapshotChanges())
    return this.firestore.collection("blogs").snapshotChanges();
  }
}
