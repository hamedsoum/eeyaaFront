import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  constructor() { }
  
  entreprieForm = false;
  logo : string = "./assets/images/logo.jpeg";
  ngOnInit(): void {
    this.entreprieForm;
  }
  clickToShowForm1(){
    this.entreprieForm = false;
    console.log('1')
  }
  clickToShowForm2(){
    this.entreprieForm = true;
    console.log('2');
  }

}
