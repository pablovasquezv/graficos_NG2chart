import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
//import Modelos
import { UsuariosInterface } from "src/app/models/usuarios.interface";
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.usuariosCollection = angularFirestore.collection<UsuariosInterface>('Usuarios');
    this.usuarios = this.usuariosCollection.valueChanges();
     /**  this.usuariosCollection = angularFirestore.collection<UsuariosInterface>('Usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges()
    .pipe(map(actions =>actions.map(a=>{
      const data = a.payload.doc.data()as UsuariosInterface;
      const ID_Usuario= a.payload.doc.id;
      return{ ID_Usuario, ...data}
    }))
    );*/
  }
  private usuariosCollection: AngularFirestoreCollection<UsuariosInterface>;
  private usuarios: Observable<UsuariosInterface[]>;
  private usuarioDoc: AngularFirestoreDocument<UsuariosInterface>;
  private usuario: Observable<UsuariosInterface>;
  //Prop. Modal
  public selectUsuarios: UsuariosInterface = { ID_Usuario: null };

  getAllUsuarios() {
    return this.usuarios = this.usuariosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as UsuariosInterface;
          data.ID_Usuario = action.payload.doc.id;
          return data;
        });
      }));
  }

  addUsuarios(usuarios: UsuariosInterface): void {
    this.usuariosCollection.add(usuarios);
  }

  updateUsuarios(usuarios: UsuariosInterface): void {
    let ID_Usuario = usuarios.ID_Usuario;
    this.usuarioDoc = this.angularFirestore.doc<UsuariosInterface>(`Usuarios/${ID_Usuario}`);
    this.usuarioDoc.update(usuarios);
  }

  deleteUsuario(ID_Usuario: string): void {
    this.usuarioDoc = this.angularFirestore.doc<UsuariosInterface>(`Usuarios/${ID_Usuario}`);
    this.usuarioDoc.delete();
  }

}
