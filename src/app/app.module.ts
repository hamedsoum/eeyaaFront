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
import { DebriefComponent } from './etatsDeProjet/debrief/debrief.component';
import { DebriefCarouseComponent } from './debrief-carouse/debrief-carouse.component';
import { ProfilEntrepriseTimelineComponent } from './profil-entreprise-timeline/profil-entreprise-timeline.component';
import { ModalProjetArciveComponent } from './modal-projet-arcive/modal-projet-arcive.component';
import { PreselectionComponent } from './etatsDeProjet/preselection/preselection.component';
import { EvaluationComponent } from './etatsDeProjet/evaluation/evaluation.component';
import { MenuComponent } from './menu/menu.component';
import { ProfilCreatifComponent } from './profil-creatif/profil-creatif.component';
import { GestionGainComponent } from './gestion-gain/gestion-gain.component';
import { ModalChooseActionCreatifComponent } from './modal-choose-action-creatif/modal-choose-action-creatif.component';
import { DebriefCreatifComponent } from './debrief-creatif/debrief-creatif.component';
import { DebriefCreatif2Component } from './debrief-creatif2/debrief-creatif2.component';
import { DebriefCreatif3Component } from './debrief-creatif3/debrief-creatif3.component';
import { ResultatFinalComponent } from './resultat-final/resultat-final.component';
import { VoirProjetEnCoursCreatifComponent } from './voir-projet-en-cours-creatif/voir-projet-en-cours-creatif.component';



const appRoutes : Routes =[
  {path : 'debrief', component: DebriefComponent},
  {path :'pageDacc', component:PageDaccComponent },
  {path: 'connexion', component:ConnexionComponent},
  {path:'inscription/entreprise', component: EntrepriseComponent},
  {path: 'inscription/talents', component: TalentsComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'profil_entreprise', component: ProfilEntrepriseComponent},
  {path: 'profilCreatif', component: ProfilCreatifComponent},
  {path: 'gestionGain', component: GestionGainComponent },
  {path: 'entrepriseTimeline', component: ProfilEntrepriseTimelineComponent},
  {path: 'menu', component: MenuComponent},
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
    AddProjetComponent,
    DebriefComponent,
    DebriefCarouseComponent,
    ProfilEntrepriseTimelineComponent,
    ModalProjetArciveComponent,
    PreselectionComponent,
    EvaluationComponent,
    MenuComponent,
    ProfilCreatifComponent,
    GestionGainComponent,
    ModalChooseActionCreatifComponent,
    DebriefCreatifComponent,
    DebriefCreatif2Component,
    DebriefCreatif3Component,
    ResultatFinalComponent,
    VoirProjetEnCoursCreatifComponent
    
     
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
  bootstrap: [AppComponent]
})
export class AppModule { }
