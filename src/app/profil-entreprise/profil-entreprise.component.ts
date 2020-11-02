import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.css']
})
export class ProfilEntrepriseComponent implements OnInit {

  constructor(private modalService : ModalServiceService  ) { }
    home : string = "./assets/images/profil_Image/44604B.png";
    logo : string = "./assets/images/profil_Image/logo.png";
    notif : string = "./assets/images/profil_Image/notif.png";
    profilImage : string = "./assets/images/profil_Image/team2.jpg";
    folder : string = "./assets/images/profil_Image/folder.png";
    menu1 : string = "./assets/images/profil_Image/Menu-1-profilB.png";
    menu2 : string = "./assets/images/profil_Image/Menu-2-timelineB.png";
    menu3 : string = "./assets/images/profil_Image/Menu-3-formationB.png";
    menu4 : string = "./assets/images/profil_Image/Menu-4-présentationB.png";
    menu5 : string = "./assets/images/profil_Image/Menu-5-paramètresB.png";

    sideBarOpen :boolean = false;
    quickAccessImages = [
      {
        url : "./assets/images/profil_Image/user.png",
        name: "EDITION DU PROFIL"
      },
      {
        url : "./assets/images/profil_Image/project-management (1).png",
        name: "PROJETS",
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
    ];

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

    clickMe(){
      this.modalService.sendClickEvent();
    }

    
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


