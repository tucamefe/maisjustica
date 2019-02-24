import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ProcessosComponent } from './processos/processos.component';
import { DetalhamentoProcessoComponent } from './detalhamento-processo/detalhamento-processo.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from 'src/material-module';
import { MatNativeDateModule } from '@angular/material';
import { QuestionarioComponent } from './questionario/questionario.component';
import { GlossarioComponent } from './glossario/glossario.component';
import { ProcessovazioComponent } from './processovazio/processovazio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProcessosComponent,
    DetalhamentoProcessoComponent,
    MenuComponent,
    QuestionarioComponent,
    GlossarioComponent,
    ProcessovazioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
