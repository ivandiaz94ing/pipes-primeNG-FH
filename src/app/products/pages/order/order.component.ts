import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUperCase : boolean = false;
  public orderBy?: keyof Hero;


  toggleUpCase():void{
    this.isUperCase = !this.isUperCase;
  }
  changeOrderBy(value : keyof  Hero){
    this.orderBy = value;

  }

  public heroes : Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robbin',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Linterna',
      canFly: true,
      color: Color.green
    },
  ]


}
