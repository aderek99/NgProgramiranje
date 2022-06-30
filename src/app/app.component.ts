import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'NgProgramiranje';

  constructor() {
    console.log("Pozdrav iz konstuktora");
   }

   ngOnInit() {
     console.log("Pozdrav iz metoda NgOnInit");
   }


}





















// VARIJABLE
// JS Varijable: 
// zastarjele varijable: ključna riječ: var
// 1. let imeVarijable = 5;
//    a) let imeVarijable;  
// 2. const PI = 3.14


// TIPOVI PODATAKA - PRIMITIVNI TIPOVI PODATAKA
// 8 vrsta tipova podataka: number, string, boolean, bigint, null, undefined, object, symbol
