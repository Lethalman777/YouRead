import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkpieceSetupPageComponent } from './components/pages/workpiece-setup-page/workpiece-setup-page.component';
import { ResultPageComponent } from './components/pages/result-page/result-page.component';
import { ReadPageComponent } from './components/pages/read-page/read-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { UserWorkpiecesPageComponent } from './components/pages/user-workpieces-page/user-workpieces-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { NewPostPageComponent } from './components/pages/new-post-page/new-post-page.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { WorkpieceEditPageComponent } from './components/pages/workpiece-edit-page/workpiece-edit-page.component';
import { WritingChapterEditPageComponent } from './components/pages/writing-chapter-edit-page/writing-chapter-edit-page.component';
import { WritingChapterNewPageComponent } from './components/pages/writing-chapter-new-page/writing-chapter-new-page.component';

const routes: Routes = [
  {path: 'workpiece-new', component: WorkpieceSetupPageComponent},
  {path: 'workpiece-edit/:id', component: WorkpieceEditPageComponent},
  {path: 'results', component: ResultPageComponent},
  {path: 'read/:id', component: ReadPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegisterPageComponent},
  {path: 'workpiece-results', component: ResultPageComponent},
  {path: 'start', component: StartPageComponent},
  {path: 'new-post/:id', component: NewPostPageComponent},
  {path: 'user-workpieces/:id', component: UserWorkpiecesPageComponent},
  {path: 'user-profile/:id', component: ProfilePageComponent},
  {path: 'chapter-new/:id', component: WritingChapterNewPageComponent},
  {path: 'chapter-edit/:id', component: WritingChapterEditPageComponent},
  //{path: 'workpiece-read', component: ReadPageComponent},
  {path: '', redirectTo: 'start', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
