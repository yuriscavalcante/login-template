import { inject, Injectable } from '@angular/core';

import { IUser } from 'src/app/interfaces/IUser';
import { AppError } from 'src/app/Error/AppError';
import { addDoc, collection, docData, Firestore } from '@angular/fire/firestore';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private firestore: Firestore,
    ) {}
  private auth = getAuth(); 
  async register(userRegister: any) {
    const newUser = await createUserWithEmailAndPassword(this.auth, userRegister.email, userRegister.password);
    delete userRegister.password;
    delete userRegister.confirmPassword;
    return await addDoc(collection(this.firestore, `Users`), userRegister).then((info) => {
      return info
    }).catch((err) => {
      throw new AppError('Erro ao salvar dados de usuario');
    })
  }

  async login(userLogin: any) {
    const user = await signInWithEmailAndPassword(this.auth, userLogin.email, userLogin.password);
    // const data = docData(user.)
    return user;
  }
}
