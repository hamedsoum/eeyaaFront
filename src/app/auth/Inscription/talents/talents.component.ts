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
  logo : string = "./assets/images/logo.jpeg";
  ngOnInit(): void {
   
  }
  clickMe(){
    
      this.talentInscriptionStep1 = this.talentInscritionStep2;
      console.log(this.talentInscriptionStep1);
      
    
  
  }
    
}
