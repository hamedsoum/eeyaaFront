import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ModalServiceService } from 'src/app/modal-service.service';

@Component({
  selector: 'app-modal-choose-action',
  templateUrl: './modal-choose-action.component.html',
  styleUrls: ['./modal-choose-action.component.css']
})
export class ModalChooseActionComponent implements OnInit {
  clickEventsubscription:Subscription;
  valider : string = "./assets/images/profil_Image/valider.png";

  closeResult : string;
  constructor(private modaleService: ModalServiceService, private modalService: NgbModal) { 
    this.clickEventsubscription=this.modaleService.getClickEvent().subscribe(()=>{
      this.incrementCount();
      })
  }
  ngOnInit(): void {
  }
  show:boolean = true;

incrementCount(){
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

  


