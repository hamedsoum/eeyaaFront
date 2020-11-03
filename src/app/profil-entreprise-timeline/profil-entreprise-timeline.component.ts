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
  note : string = "./assets/images/profil_Image/note.png";
  timelineImg2 : string = "./assets/images/profil_Image/2.png";
  timelineImg3 : string = "./assets/images/profil_Image/3.png";
  timelineImg4 : string = "./assets/images/profil_Image/4.png";
  medal : string = "./assets/images/profil_Image/4.png";
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

}
