import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null)
      }
    })
  }

  async login(email: string, password: string){
    console.log("email:" + email + "||  password:" + password)
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      console.log("logged in")
      this.router.navigate(['admin/list'])
    } catch(e){
      alert("Error!" + e.message)
    }
  }
  async logout(){
    await this.afAuth.auth.signOut();
    console.log("logged out")
    localStorage.removeItem('user');
    this.router.navigate(['admin/login'])
  }
  get isLoggedIn(): boolean {
    if(this.user != null){
      return true
    }
    else{
      return false
    }
  }
}
