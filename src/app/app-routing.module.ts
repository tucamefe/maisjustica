import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProcessosComponent } from './processos/processos.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { GlossarioComponent } from './glossario/glossario.component';
import { ProcessovazioComponent } from './processovazio/processovazio.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'processos', component: ProcessosComponent },
  { path: 'processovazio', component: ProcessovazioComponent },
  { path: 'questionario', component: QuestionarioComponent },
  { path: 'glossario', component: GlossarioComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
