import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FetchProjectsService {
  constructor(private firestore: AngularFirestore) { }

  getProjects(){
    return this.firestore.collection('projects').snapshotChanges();
  }
}
