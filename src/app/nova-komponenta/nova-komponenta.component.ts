import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-nova-komponenta',
  templateUrl: './nova-komponenta.component.html',
  styleUrls: ['./nova-komponenta.component.scss']
})
export class NovaKomponentaComponent implements OnInit {

  objave: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {



    let test=this.api.getBlogPostovi().subscribe((podaci: [])=>{
      
      this.objave=podaci;
      


    }, (greska)=>{
      console.log('Doslo je do greske.')
    }, ()=>{
      console.log('Zavrseno.')
    });
  }

}
