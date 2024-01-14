import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect Pipe
  public name: string = ' Ivan ';
  public gender : 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  cambiarPersona(){
    this.name = 'Katty';
    this.gender = 'female';
  }

  //i18nPlural Pipe
  public clientes : string[] = ['Rafael', 'Marina','Monica','Rafita','Ivan','Yandy','Isabel','Sharoll','Sergio'];
  public clientsMap = {
    '=0' : 'no tememos ningun cliente esperando ',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos dos clientes esperando ',
    'other' : 'tenemos # clientes esperando '
  }

  borrarCliente(): void{
    this.clientes.shift();
  }

}
