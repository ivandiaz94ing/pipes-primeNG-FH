import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower : string = 'ivan';
  public nameUpper : string = 'IVAN';
  public fullName : string = 'iVaN arTUrO';

}
