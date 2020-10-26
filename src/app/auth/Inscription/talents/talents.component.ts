import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {

  constructor() { }
  talentInscriptionStep1 : string = "1";
  talentInscritionStep2:string  = "2";
  flecheDirection = false;
  logo : string = "./assets/images/logo.jpeg";
  ngOnInit(): void {
   this.flecheDirection;
  }
  clickMe(){
    this.flecheDirection = !this.flecheDirection;
      this.talentInscriptionStep1 = this.talentInscritionStep2;
      console.log(this.talentInscriptionStep1);
      console.log(this.flecheDirection);
  }
    
}
