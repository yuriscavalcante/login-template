import { inject, Injectable } from '@angular/core';

import { IUser } from 'src/app/interfaces/IUser';
import { AppError } from 'src/app/Error/AppError';
import { addDoc, collection, collectionData, doc, docData, Firestore, getFirestore, setDoc } from '@angular/fire/firestore';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private firestore: Firestore,
    ) {}
  private auth = getAuth();
  private db = getFirestore();
  private userCollection = collection(this.firestore, `Users`); 
  private uid = '';
  async register(userRegister: any) {
    const newUser = await createUserWithEmailAndPassword(this.auth, userRegister.email, userRegister.password);
    delete userRegister.password;
    delete userRegister.confirmPassword;
    Object.assign(userRegister, {
      uid: newUser.user.uid
    })
    return await setDoc(doc(this.userCollection, newUser.user.uid), userRegister);
  }

  async login(userLogin: any) {
    const user = await signInWithEmailAndPassword(this.auth, userLogin.email, userLogin.password);
    this.uid = user.user.uid;
    return docData(doc(this.userCollection, this.uid)) as Observable<IUser>;
  }
}
