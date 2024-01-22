import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})


export class ToggleCasePipe implements PipeTransform {

  transform(value: string, uperCase:boolean = false): string {
      return (uperCase) ? value.toUpperCase() : value.toLowerCase();
    }


// export class ToggleCaseComponent implements PipeTransform {
//   transform(value: string, upercase:boolean): string {
//     if (upercase) {
//       return value.toUpperCase();
//     }
//     return value.toLowerCase();

//   }


}
