import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FetchProjectsService {
  constructor(private firestore: AngularFirestore) { }

  getProjects(){
    console.log("getProjects")
    console.log(this.firestore.collection('projects').snapshotChanges())
    return this.firestore.collection('projects').snapshotChanges();
  }
}
