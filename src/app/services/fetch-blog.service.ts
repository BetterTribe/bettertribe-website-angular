import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FetchBlogService {

  constructor(private firestore: AngularFirestore) { }

  fetchBlogById(id: string){
    return this.firestore.collection("blogs").doc(id)
  }
}
