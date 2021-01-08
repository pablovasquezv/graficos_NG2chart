import { Component, OnInit,Input } from '@angular/core';
//Gráficos
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

//Fechas
import { DatePipe } from '@angular/common';
//Models
import { MedicionGlucosaInterface } from 'src/app/models/MedicionGlucosa.Interface';
//Servi
import { MedicionesService } from 'src/app/service/mediciones.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private medicionesService: MedicionesService) { }
  //
  labels: Label[] = [];
  data: ChartDataSets[] = [];
  //Tranforma la fecha
  datepipe: DatePipe = new DatePipe("es-CL");
  public listMedicionGlucosaInterface: MedicionGlucosaInterface[] = [];
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    //this.listMedicionGlucosaInterface= listMedicionGlucosaInterface;
    this.medicionesService.getAllMedicionGlucosa().subscribe(
      (resp) => {

        this.prepareGraph();
        //
        console.log(resp);

      },
      (error) => {
        console.log(error);
      }
    );
  }

  prepareGraph() {
    this.labels = [];
    this.data = [];

    if (this.listMedicionGlucosaInterface == null) return;

    {
      this.medicionesService.getAllMedicionGlucosa().subscribe(
        listMedicionGlucosaInterface => {
          this.listMedicionGlucosaInterface = listMedicionGlucosaInterface
          //})
          let values = [];
          
          this.listMedicionGlucosaInterface.forEach(listMedicionGlucosaInterface => {

            this.labels.push(this.datepipe.transform(listMedicionGlucosaInterface.Fecha));
            let nivelGlucosa = listMedicionGlucosaInterface.Nivel;
            if (nivelGlucosa == null) nivelGlucosa = 0;
            values.push(nivelGlucosa);
          });
          this.data.push({ data: values, label: 'Niveles de Glucosa' });
        }
      )
    }

  }
}


