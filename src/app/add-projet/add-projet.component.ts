import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {
  clickEventsubscription:Subscription;
  constructor(private modalService:ModalServiceService) { 
    this.clickEventsubscription=this.modalService.getClickEvent().subscribe(()=>{
      this.incrementCount();
      })
  }

  ngOnInit(): void {
  }
  count:boolean = true;

  incrementCount(){
  this.count = !this.count;
  }
  clickMe(){
    this.modalService.sendClickEvent();
  }
}
