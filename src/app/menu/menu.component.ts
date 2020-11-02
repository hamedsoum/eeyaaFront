import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu1 : string = "./assets/images/profil_Image/Menu-1-profilB.png";
  menu2 : string = "./assets/images/profil_Image/Menu-2-timelineB.png";
  menu3 : string = "./assets/images/profil_Image/Menu-3-formationB.png";
  menu4 : string = "./assets/images/profil_Image/Menu-4-présentationB.png";
  menu5 : string = "./assets/images/profil_Image/Menu-5-paramètresB.png";
  sideBarOpen :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openMENU(){
    this.sideBarOpen = !this.sideBarOpen;
    console.log(!this.sideBarOpen);
    
  }
  closeMENU(){
    this.sideBarOpen = !this.sideBarOpen;
    console.log(!this.sideBarOpen);
  }
}
