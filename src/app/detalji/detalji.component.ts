import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.scss']
})
export class DetaljiComponent implements OnInit {

  drzava:any;

  constructor(private parametar: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    this.parametar.params.subscribe((podatak:any)=>{
        this.api.getDrzavaPoCiocKodu(podatak.id).subscribe((odgovor)=>{
          this.drzava=odgovor[0];
        });
    })
  }

}
