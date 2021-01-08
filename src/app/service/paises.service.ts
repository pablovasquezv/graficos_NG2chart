import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import Modelos
import { PaisesInterface } from "../models/paises.Interface";
import { Observable } from 'rxjs/internal/Observable';
import { snapshotChanges } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.paisesCollection = angularFirestore.collection<PaisesInterface>('Paises');
    this.paises = this.paisesCollection.valueChanges();
  }
  private paisesCollection: AngularFirestoreCollection<PaisesInterface>;
  private paises: Observable<PaisesInterface[]>;
  private paisDoc: AngularFirestoreDocument<PaisesInterface>;
  private pais: Observable<PaisesInterface>;
  //Prop. Modal
  public selectPaises: PaisesInterface = { ID_Pais:null};

  getAllPaises() {
    return this.paises = this.paisesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as PaisesInterface;
          data.ID_Pais = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOnePais(ID_Pais: string) {
    this.paisDoc = this.angularFirestore.doc<PaisesInterface>(`Paises/${ID_Pais}`);
    return this.pais = this.paisDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as PaisesInterface;
        data.ID_Pais = action.payload.id;
        return data;
      }
    }));
  }

  addPais(pais: PaisesInterface): void {
    this.paisesCollection.add(pais);
  }
  updatePais(pais: PaisesInterface): void {
    let ID_Pais = pais.ID_Pais;
    this.paisDoc = this.angularFirestore.doc<PaisesInterface>(`Paises/${ID_Pais}`);
    this.paisDoc.update(pais);
  }
  deletePais(ID_Pais: string): void {
    this.paisDoc = this.angularFirestore.doc<PaisesInterface>(`Paises/${ID_Pais}`);
    this.paisDoc.delete();
  }
}
