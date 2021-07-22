import { Component } from "@angular/core";





@Component({

selector:'app-heroe',
templateUrl:'heroe.Component.html'


})

export class HeroeComponent{
nombre:string = 'ironman';
edad:number=45;


obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
}


get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
}


cambiarNombre():void{
    this.nombre = 'spideman';

}

cambiarEdad():void{
    this.edad = 30;

}


}
