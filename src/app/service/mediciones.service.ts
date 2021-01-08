import { Injectable } from '@angular/core';
import { MedicionGlucosaInterface } from '../models/MedicionGlucosa.Interface';
import {  AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {
  storageKey = 'mediciones';
  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.medicionGlucosaCollection = angularFirestore.collection<MedicionGlucosaInterface>('MedicionGlucosa');
    this.medicionGlucosa = this.medicionGlucosaCollection.valueChanges();
    /*this.medicionGlucosa = this.medicionGlucosaCollection.snapshotChanges()
    .pipe(map(actions =>actions.map(a=>{
      const data = a.payload.doc.data()as MedicionGlucosaInterface;
      const Id_MedicionGlucosa= a.payload.doc.id;
      return{ Id_MedicionGlucosa, ...data}
    }))
    );*/
  }
  private medicionGlucosaCollection: AngularFirestoreCollection<MedicionGlucosaInterface>;
  private medicionGlucosa: Observable<MedicionGlucosaInterface[]>;
  private medicionDoc: AngularFirestoreDocument<MedicionGlucosaInterface>;
  private medicionGlucos: Observable<MedicionGlucosaInterface>;
  //Prop. Modal
  public selectMedicionGlucosaInterface: MedicionGlucosaInterface = { Id_MedicionGlucosa: null };

  getAllMedicionGlucosa() {
    //return this.medicionGlucosa;
    return this.medicionGlucosa = this.medicionGlucosaCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as MedicionGlucosaInterface;
          data.Id_MedicionGlucosa = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneMedicionGlucosa(Id_MedicionGlucosa: string) {
    this.medicionDoc = this.angularFirestore.doc<MedicionGlucosaInterface>(`MedicionGlucosa/${Id_MedicionGlucosa}`);
    return this.medicionGlucos = this.medicionDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as MedicionGlucosaInterface;
        data.Id_MedicionGlucosa = action.payload.id;
        return data;
      }
    }));
  }
  
  addMedicionGlucosa(medicionGlucosa: MedicionGlucosaInterface): void {
    this.medicionGlucosaCollection.add(medicionGlucosa);
  }
  
  updateMedicionGlucosa(medicionGlucosa: MedicionGlucosaInterface): void {
    let Id_MedicionGlucosa = medicionGlucosa.Id_MedicionGlucosa;
    this.medicionDoc = this.angularFirestore.doc<MedicionGlucosaInterface>(`MedicionGlucosa/${Id_MedicionGlucosa}`);
    this.medicionDoc.update(medicionGlucosa);
  }

  deleteMedicionGlucosa(Id_MedicionGlucosa: string): void {
    this.medicionDoc = this.angularFirestore.doc<MedicionGlucosaInterface>(`MedicionGlucosa/${Id_MedicionGlucosa}`);
    this.medicionDoc.delete();
  }
}
