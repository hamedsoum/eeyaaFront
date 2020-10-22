import { Component,  Directive, Input, ViewChild } from '@angular/core';

@Directive({selector: 'p'})
export class p {
  @Input() id!: string;
}

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent   {
  @ViewChild(p)
  set p(v: p) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }
  selectedPane: string = '';
  animeType: string  = '';
  shouldShow = true;
  toggle() {
    this.shouldShow = !this.shouldShow;
    if(this.shouldShow === false){
      this.animeType ='animate__fadeOutDown';
    }else{
      this.animeType = 'animate__fadeInDown';
    }

    console.log(this.shouldShow);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
