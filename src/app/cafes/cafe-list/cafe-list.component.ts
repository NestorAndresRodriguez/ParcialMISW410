import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  cafeOrigen = 0;
  cafeBlend = 0;

  constructor(private cafeServices : CafeService) { }

  ngOnInit() {
    this.getCafes();
  }

  getCafes(){
    this.cafeServices.getCafes().subscribe(response => {
      this.cafes = response;
      this.cafes.forEach(element => {
        if(element.tipo == "Blend")
          this.cafeBlend++;
        else
          this.cafeOrigen++;
      });
    })
  }

}
