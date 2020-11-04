import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-entreprise-timeline',
  templateUrl: './profil-entreprise-timeline.component.html',
  styleUrls: ['./profil-entreprise-timeline.component.css']
})
export class ProfilEntrepriseTimelineComponent implements OnInit {
  home : string = "./assets/images/profil_Image/44604B.png";
  logo : string = "./assets/images/profil_Image/logo.png";
  notif : string = "./assets/images/profil_Image/notif.png";
  profilImage : string = "./assets/images/profil_Image/team2.jpg";
  folder : string = "./assets/images/profil_Image/folder.png";
  imgTimeline1 : string = "./assets/images/profil_Image/1.png";
  comment : string = "./assets/images/profil_Image/comment.png";
  like : string = "./assets/images/profil_Image/like (2).png";
  note : string = "./assets/images/profil_Image/note.png";
  timelineImg2 : string = "./assets/images/profil_Image/2.png";
  timelineImg3 : string = "./assets/images/profil_Image/3.png";
  timelineImg4 : string = "./assets/images/profil_Image/4.png";
  crayon : string =  "./assets/images/profil_Image/crayon.png";
  medal : string = "./assets/images/profil_Image/4.png";
  medale : string = "./assets/images/profil_Image/medal.png";
  sideBarOpen :boolean = false;
  menu1 : string = "./assets/images/profil_Image/Menu-1-profilB.png";
  menu2 : string = "./assets/images/profil_Image/Menu-2-timelineB.png";
  menu3 : string = "./assets/images/profil_Image/Menu-3-formationB.png";
  menu4 : string = "./assets/images/profil_Image/Menu-4-présentationB.png";
  menu5 : string = "./assets/images/profil_Image/Menu-5-paramètresB.png";
  personneConnecte = [
    {
      url : "./assets/images/profil_Image/team1.jpg"
    
    },
    {
      url : "./assets/images/profil_Image/team3.jpg"
    },
    {
      url: "./assets/images/profil_Image/team4.jpg"
    },
    {
      url: "./assets/images/profil_Image/team5.jpg"

    }
  ]

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
