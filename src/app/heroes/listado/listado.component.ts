import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

 heroes:string[] =['spiderman','IroMAN','Hulk', 'Thor'];
 heroeBorado:string='';
 i:number=0;

 borrarHeroe(){

 this.heroeBorado= this.heroes.shift() || '';
   


 }

}
