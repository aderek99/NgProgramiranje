import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drzave } from '../interfaces/drzave';
import { ApiService } from '../servisi/api.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.scss']
})
export class DrzaveComponent implements OnInit {

  listaDrzava: Drzave[];
  listaDrzavaZaDisplay: Drzave[];
  kontinenti:string[];
  ukupniBrojStanovnika: number;


  pretragaForm=this.formBuilder.group({
    terminPretrage: ['',Validators.required]
  })

  constructor(private api:ApiService, private formBuilder: FormBuilder) { }
  
  FilterRegija(kontinent:string){
    
    this.listaDrzavaZaDisplay=this.listaDrzava.filter((drzava)=>drzava.region.toLowerCase().includes(kontinent.toLowerCase()))
  }

  Pretrazi(){
    let filtriraneDrzave=this.listaDrzava.filter((drzava)=>drzava.name.common.toLowerCase().includes(this.pretragaForm.value.terminPretrage.toLowerCase()));
    this.listaDrzavaZaDisplay=filtriraneDrzave;
  }

  ngOnInit(): void {
    this.api.getDrzave().subscribe((drzave: Drzave[])=>{ 
      this.listaDrzava=drzave;
      this.listaDrzavaZaDisplay=drzave;
      this.kontinenti=[... new Set(this.listaDrzava.map((drzava)=>drzava.region
      ))]

      this.ukupniBrojStanovnika=this.listaDrzava.reduce((total,trenutnaVrijednost)=>{
        total=total+trenutnaVrijednost.population;
        return total;
      },0);

/*       let sortiraneDrzave=this.listaDrzava.sort((a,b)=>{
        if(a.name.common>b.name.common){return 1};
        if(a.name.common<b.name.common){return -1};
        return 0;
      });

      this.listaDrzava=sortiraneDrzave;

      let drzavePoBrojuStanovnika=this.listaDrzava.sort((a,b)=>a.population-b.population);
      this.listaDrzava=drzavePoBrojuStanovnika;

      
    let drzavePoPovrsini=this.listaDrzava.sort((a,b)=>a.area-b.area);
    this.listaDrzava=drzavePoPovrsini; */

    })

    this.pretragaForm.valueChanges.subscribe((forma)=>{
      let filtriraneDrzave=this.listaDrzava.filter((drzava)=>drzava.name.common.toLowerCase().includes(this.pretragaForm.value.terminPretrage.toLowerCase()));
      this.listaDrzavaZaDisplay=filtriraneDrzave;
    })
  }

  SortirajPoImenu(){
    this.listaDrzavaZaDisplay=this.listaDrzava.sort((a,b)=>{
      if(a.name.common>b.name.common){return 1};
      if(a.name.common<b.name.common){return -1};
      return 0;
    })
  }

  SortirajPoBrojuStanovnika(){
    this.listaDrzavaZaDisplay=this.listaDrzava.sort((a,b)=>a.population-b.population)
  }

}
