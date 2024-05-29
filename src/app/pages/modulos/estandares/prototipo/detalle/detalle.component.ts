import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent  implements OnInit{

  toppings = new FormControl('');
  regiones = new FormControl('');
  tecnologias = new FormControl('');
  tipoinstalaciones = new FormControl('');
  tiposistemas = new FormControl('');
  tipoceldas = new FormControl('');
  cccircuitos = new FormControl('');



  toppingList: string[] = ['500 KV', '220 kV', '138 kV', '60 kV', '33 kV', '23 kV','10 kv'];
  regionList: string[] = ['Costa', 'Sierra', 'Selva'];
  tecnologiaList: string[] = ['Convencional', 'Encapsulada', 'Metalclac'];
  tipoinstalacionList: string[] = ['Al exterior', 'Al interior'];
  tiposistemaList: string[] = ['Doble barra', 'Doble barra mas seccionador de transferencia', 'Interruptor y medio','Simple barra','Línea - transformador'];
  tipoceldaList: string[] = ['Compensación', 'Línea', 'Medida','Transformador - Reactor -Compensación','Acople longitudinal','Alimentador','Reactor de linea','Acople','Línea - Transformador','Compensador Síncrono'];
  cccircuitoList: string[] = ['63 kA', '40 kA','31.5 kA','25 kA','16 kA'];

  ngOnInit(): void {
  }
}
