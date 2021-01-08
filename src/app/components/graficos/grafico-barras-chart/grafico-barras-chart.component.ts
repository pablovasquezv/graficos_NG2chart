import { Component, OnInit,Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-barras-chart',
  templateUrl: './grafico-barras-chart.component.html',
  styleUrls: ['./grafico-barras-chart.component.scss']
})
export class GraficoBarrasChartComponent implements OnInit {

 /**Mostar el procentaje de desvio y fecha de modificación  */
 @Input() data: ChartDataSets[] = [];
 @Input() labels: Label[] = [];

 public barChartOptions: ChartOptions = {

   responsive: true,
 };

 //etiquetas del eje x
 public barChartType: ChartType = 'bar';
 public barChartLegend = true;
 public barChartPlugins = [];
 // Define colors of chart segments
 barChartColors: Color[] = [
   {
     borderColor: 'black',
     backgroundColor: 'rgba(255,0,0,0.3)',
   },
   { // red
     backgroundColor: 'rgba(255,0,0,0.3)',
     borderColor: 'red',
   },
   { // dark grey
     backgroundColor: 'rgba(77,83,96,0.2)',
     borderColor: 'rgba(77,83,96,1)',
   },
 ];

 /**
  * aun se cargar los datos por defecto.
  */
 // events
 chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   //console.log(event, active);
 }

 chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   // console.log(event, active);
 }

 constructor() { }

 datoTempora1() {
   this.data = [{ data: [5], label: 'temp' }];
 }

 ngOnInit() {
   //al momento de iniciar cargamos data temporal
   this.datoTempora1();
 }

}
