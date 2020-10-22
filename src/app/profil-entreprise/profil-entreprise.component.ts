import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.css']
})
export class ProfilEntrepriseComponent implements OnInit {

  constructor() { }
    profilImage : string = "./assets/images/profil_Image/team2.jpg";
    quickAccessImages = [
      {
        url : "./assets/images/profil_Image/user.png",
        name: "EDITION DU PROFIL"
      },
      {
        url : "./assets/images/profil_Image/project-management (1).png",
        name: "PROJETS"
      },
      {
        url: "./assets/images/profil_Image/receive-mail.png",
        name:"RECRUTEMENT PARTICIPATIF"
      },
      {
        url: "./assets/images/profil_Image/recruitment.png",
        name: "PUBLICATION"

      },
      {
        url: "./assets/images/profil_Image/notes.png",
        name:"MESSAGE"
      }
    ]
  ngOnInit(): void {
  }

}
