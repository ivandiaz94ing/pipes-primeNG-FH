import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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

  //KeyValuePipe

  public person = {
    name: 'Ivan',
    address: 'Mz 66 casa 17',
    age: 29
  }

  //Async Pipe
  public myObservalTime = interval(2000)
  .pipe(tap(value => console.log('tap:', value)
  ));

  public promiseValue : Promise<string> = new Promise((resolve, reject)=>{
    resolve ('Tenemos una promesa');
  })
}
