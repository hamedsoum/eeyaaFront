import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ModalServiceService } from 'src/app/modal-service.service';

@Component({
  selector: 'app-modal-choose-action-creatif',
  templateUrl: './modal-choose-action-creatif.component.html',
  styleUrls: ['./modal-choose-action-creatif.component.css']
})
export class ModalChooseActionCreatifComponent implements OnInit {
  clickEventsubscription:Subscription;
  valider : string = "./assets/images/profil_Image/valider.png";
  attente : string = "./assets/images/profil_Image/attente.png";


  closeResult : string;
  constructor(private modaleService: ModalServiceService, private modalService: NgbModal) { 
    this.clickEventsubscription=this.modaleService.getClickEvent().subscribe(()=>{
      this.showHide();
      })
  }
  ngOnInit(): void {
  }
  show:boolean = true;

showHide(){
this.show = !this.show;
}

ShowAddProjet(){
  this.modaleService.sendClickEvent();
}

openlg(content) {
  this.modalService.open(content, { size: 'lg',centered: true });
}
openXl(content2) {
  this.modalService.open(content2, { size: 'xl', centered: true });
}
openXl1(content4) {
  this.modalService.open(content4, { size: 'xl', centered: true });
}


open(content3) {
  this.modalService.open(content3, {  centered: true,size: 'xl' });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
}
