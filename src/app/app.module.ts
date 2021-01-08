import { BrowserModule } from '@angular/platform-browser';

//Locale para mostrar Fecha
import { NgModule,LOCALE_ID } from '@angular/core';

import{NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA }from'@angular/core';
//Import formulario activo
import { ReactiveFormsModule} from '@angular/forms';

//Grafícos
import { ChartsModule } from 'ng2-charts';
//Formulario
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
//Importamos el archivo para la configuración de la conexion a la base de datos 
import { environment } from '../environments/environment';
//Reutilizamos la configuracion previamente
import { AngularFireModule } from '@angular/fire';
//Importamos los modulos de firabase para la base de datos
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Service
import {UsuariosService  } from './service/usuarios.service';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

//Para mostrar Fechas
import { registerLocaleData } from '@angular/common';
import { DatePipe } from '@angular/common';
import localeCL from '@angular/common/locales/es-CL';
import localeExtraCL from '@angular/common/locales/extra/es-CL';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

//Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
//Gráficos
import { GraficoBarrasChartComponent } from './components/graficos/grafico-barras-chart/grafico-barras-chart.component';
//Formularios
import{FormularioEditarInsulinaComponent}from'./components/formularios/formulario-editar-insulina/formulario-editar-insulina.component';
import { FormularioIngresoInsulinaComponent } from './components/formularios/formulario-ingreso-insulina/formulario-ingreso-insulina.component';
import { FormularioPaisesComponent } from './components/formularios/formulario-paises/formulario-paises.component';
import { FormularioIngresoUsuariosComponent } from './components/formularios/formulario-ingreso-usuarios/formulario-ingreso-usuarios.component';
import { FormularioEditarUsuariosComponent } from './components/formularios/formulario-editar-usuarios/formulario-editar-usuarios.component';
//tablas
import { TablaInsulinaComponent } from './components/tablas/tabla-insulina/tabla-insulina.component';
import { TablaPaisesComponent } from './components/tablas/tabla-paises/tabla-paises.component';
import { TablaUsuariosComponent } from './components/tablas/tabla-usuarios/tabla-usuarios.component';

//modals
import { ModalUsuarioComponent } from './components/modals/modal-usuario/modal-usuario.component';
import { ModalInsulinaComponent } from './components/modals/modal-insulina/modal-insulina.component';
import { ModalIngresoPaisComponent } from './components/modals/modal-ingreso-pais/modal-ingreso-pais.component';

// the second parameter 'fr-FR' is optional para msotrar fechas
registerLocaleData(localeCL, 'es-CL', localeExtraCL);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,,
    FormularioIngresoInsulinaComponent,
    FormularioEditarInsulinaComponent,
    FormularioPaisesComponent,
    ModalIngresoPaisComponent,
    TablaPaisesComponent,
    ModalInsulinaComponent,
    FormularioIngresoUsuariosComponent,
    FormularioEditarUsuariosComponent,
    TablaUsuariosComponent,
    TablaInsulinaComponent,
    ModalUsuarioComponent,
    GraficoBarrasChartComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    AngularFirestoreModule,
    //utiliza un metodo para iniciar la configuracion desde la conexión a firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ChartsModule,
    HttpClientModule,
    MatNativeDateModule,
    
    
     //Inyectamos el fire data module
     
  ],
  providers: [ UsuariosService,DatePipe, 
    { provide: LOCALE_ID, useValue: 'es-CL' },
    { provide: MAT_DATE_LOCALE, useValue: 'es-CL' },
  ],
  bootstrap: [AppComponent],
  //Controlador de modals para toda la aplicacion
  entryComponents:[
    ModalIngresoPaisComponent,
    ModalInsulinaComponent,
    ModalUsuarioComponent,
  ],
  ///
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA]
})
export class AppModule { }
