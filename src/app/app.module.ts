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


const appRoutes : Routes =[
  {path :'pageDacc', component:PageDaccComponent },
  {path: 'connexion', component:ConnexionComponent},
  {path:'inscription/entreprise', component: EntrepriseComponent},
  {path: 'inscription/talents', component: TalentsComponent},
  {path:'', component: PageDaccComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageDaccComponent,
    ConnexionComponent,
    EntrepriseComponent,
    TalentsComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
