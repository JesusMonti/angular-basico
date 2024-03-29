import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  public heroes :  string[] = ['Spiderman','Ironman','Hulk','Thor','Cápitan América'];
  public heroesBorrado : string = '';

  borrarHeroe() : void {
    console.log('Borrando... ');
    const borrado =  this.heroes.pop();
    this.heroesBorrado = borrado || '';
  }

}
