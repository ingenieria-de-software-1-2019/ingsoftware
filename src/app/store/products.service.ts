import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFirestore) {
    
  }
      getProducts(): any{
        return this.db.collection('products').valueChanges();
      }
}
