import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDaccComponent } from './page-dacc/page-dacc.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { EntrepriseComponent } from './auth/Inscription/entreprise/entreprise.component';
import { TalentsComponent } from './auth/Inscription/talents/talents.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProfilEntrepriseComponent } from './profil-entreprise/profil-entreprise.component';
import { ModalChooseActionComponent } from './_modals/modal-choose-action/modal-choose-action.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


const appRoutes : Routes =[
  {path :'pageDacc', component:PageDaccComponent },
  {path: 'connexion', component:ConnexionComponent},
  {path:'inscription/entreprise', component: EntrepriseComponent},
  {path: 'inscription/talents', component: TalentsComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'profil_entreprise', component: ProfilEntrepriseComponent},
  {path:'', component: PageDaccComponent}
]

@NgModule({
  declarations: [ 
    AppComponent,
    PageDaccComponent,
    ConnexionComponent,
    EntrepriseComponent,
    TalentsComponent,
    PresentationComponent,
    ProfilEntrepriseComponent,
    ModalChooseActionComponent,
    AddProjetComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent
   
  ]
})
export class AppModule { }
