import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ReadPageComponent } from './pages/read-page/read-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { UserWorkpiecesPageComponent } from './pages/user-workpieces-page/user-workpieces-page.component';
import { WorkpieceEditPageComponent } from './pages/workpiece-edit-page/workpiece-edit-page.component';
import { WorkpieceSetupPageComponent } from './pages/workpiece-setup-page/workpiece-setup-page.component';
import { WritingChapterEditPageComponent } from './pages/writing-chapter-edit-page/writing-chapter-edit-page.component';
import { WritingChapterNewPageComponent } from './pages/writing-chapter-new-page/writing-chapter-new-page.component';
import { AuthGuardService } from './shared/services/auth.service';

const routes: Routes = [
  {path: 'workpiece-new', component: WorkpieceSetupPageComponent},
  {path: 'workpiece-edit/:id', component: WorkpieceEditPageComponent},
  {path: 'search', component: ResultPageComponent},
  {path: 'read/:id', component: ReadPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegisterPageComponent},
  {path: 'workpiece-results', component: ResultPageComponent},
  {path: 'home', component: StartPageComponent},
  {path: 'user-workpieces/:id', component: UserWorkpiecesPageComponent},
  {path: 'user-profile/:id', component: ProfilePageComponent},
  {path: 'chapter-new/:id', component: WritingChapterNewPageComponent},
  {path: 'chapter-edit/:id', component: WritingChapterEditPageComponent},
  //{path: 'workpiece-read', component: ReadPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }
