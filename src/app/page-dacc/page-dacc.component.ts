import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-dacc',
  templateUrl: './page-dacc.component.html',
  styleUrls: ['./page-dacc.component.css']
})
export class PageDaccComponent implements OnInit {
 isDisplay = false ;
 togleDisplay(){
   
   this.isDisplay = !this.isDisplay;
   
   
 }
  constructor() { }

  ngOnInit(): void {
  }
  logo : string = "./assets/images/logo.jpeg";
}
