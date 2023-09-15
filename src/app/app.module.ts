import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultPageComponent } from './components/pages/result-page/result-page.component';
import { ReadPageComponent } from './components/pages/read-page/read-page.component';
import { WorkpieceSetupPageComponent } from './components/pages/workpiece-setup-page/workpiece-setup-page.component';
import { WorkpieceSetupBoxComponent } from './components/form-boxes/workpiece-setup-box/workpiece-setup-box.component';
import { ResultsBoxComponent } from './components/pages/result-page/results-box/results-box.component';
import { ResultComponent } from './components/pages/result-page/results-box/result/result.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { FormValidationComponent } from './components/form-boxes/form-validation/form-validation.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { SortBoxComponent } from './components/pages/result-page/sort-box/sort-box.component';
import { UserWorkpiecesPageComponent } from './components/pages/user-workpieces-page/user-workpieces-page.component';
import { UserWorkpieceComponent } from './components/pages/user-workpieces-page/user-workpiece/user-workpiece.component';
import { UserWorkpieceChapterComponent } from './components/pages/user-workpieces-page/user-workpiece/user-workpiece-chapter-list/user-workpiece-chapter/user-workpiece-chapter.component';
import { UserWorkpieceChapterListComponent } from './components/pages/user-workpieces-page/user-workpiece/user-workpiece-chapter-list/user-workpiece-chapter-list.component';
import { NewChapterComponent } from './components/pages/user-workpieces-page/new-chapter/new-chapter.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { ProfileMainAreaComponent } from './components/pages/profile-page/profile-main-area/profile-main-area.component';
import { ProfileNavBarComponent } from './components/pages/profile-page/profile-nav-bar/profile-nav-bar.component';
import { ProfileInfoComponent } from './components/pages/profile-page/profile-info/profile-info.component';
import { WorkpiecesListComponent } from './workpieces-list/workpieces-list.component';
import { ProfileDashboardComponent } from './components/pages/profile-page/profile-main-area/profile-dashboard/profile-dashboard.component';
import { ProfileSubscriptionsComponent } from './components/pages/profile-page/profile-main-area/profile-subscriptions/profile-subscriptions.component';
import { ProfileWorkpiecesListComponent } from './components/pages/profile-page/profile-main-area/profile-workpieces-list/profile-workpieces-list.component';
import { ReadWorkpieceComponent } from './components/pages/read-page/read-workpiece/read-workpiece.component';
import { ReadBoxComponent } from './components/pages/read-page/read-box/read-box.component';
import { ReadCommentBoxComponent } from './components/pages/read-page/read-comment-box/read-comment-box.component';
import { ReadChapterNavbarComponent } from './components/pages/read-page/read-chapter-navbar/read-chapter-navbar.component';
import { ReadWorkpiecePageComponent } from './components/pages/read-page/read-box/read-workpiece-page/read-workpiece-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPostPageComponent } from './components/pages/new-post-page/new-post-page.component';
import { NewPostBoxComponent } from './components/form-boxes/new-post-box/new-post-box.component';
import { PopupEditProfileComponent } from './components/popups/popup-edit-profile/popup-edit-profile.component';
import { LoginBoxComponent } from './components/pages/login-page/login-box/login-box.component';
import { WorkpieceLabelComponent } from './components/labels/workpiece-label/workpiece-label.component';
import { NormalControlComponent } from './components/controls/normal-control/normal-control.component';
import { FileControlComponent } from './components/controls/file-control/file-control.component';
import { NumberControlComponent } from './components/controls/number-control/number-control.component';
import { SelectControlComponent } from './components/controls/select-control/select-control.component';
import { AuthorLabelComponent } from './components/labels/author-label/author-label.component';
import { ChapterLabelComponent } from './components/labels/chapter-label/chapter-label.component';
import { TextAreaControlComponent } from './components/controls/text-area-control/text-area-control.component';
import { MultipleFileControlComponent } from './components/controls/multiple-file-control/multiple-file-control.component';
import { PopupConfirmComponent } from './components/popups/popup-confirm/popup-confirm.component';
import { InformationLabelComponent } from './components/labels/information-label/information-label.component';
import { PostReadComponent } from './components/labels/post-read/post-read.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { CommentListComponent } from './components/comment-box/comment-list/comment-list.component';
import { CommentWriteComponent } from './components/comment-box/comment-write/comment-write.component';
import { CommentReadComponent } from './components/comment-box/comment-list/comment-read/comment-read.component';
import { RegisterBoxComponent } from './components/pages/register-page/register-box/register-box.component';
import { WorkpieceCarouselComponent } from './components/labels/workpiece-carousel/workpiece-carousel.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { RecomendationBoxComponent } from './components/pages/start-page/recomendation-box/recomendation-box.component';
import { RecomendationCarouselComponent } from './components/pages/start-page/recomendation-box/recomendation-carousel/recomendation-carousel.component';
import { DatePipe } from '@angular/common';
import { WorkpieceInfoComponent } from './components/labels/workpiece-info/workpiece-info.component';
import { WorkpieceEditPageComponent } from './components/pages/workpiece-edit-page/workpiece-edit-page.component';
import { UserWorkpieceChapterBoxComponent } from './components/pages/user-workpieces-page/user-workpiece/user-workpiece-chapter-box/user-workpiece-chapter-box.component';
import { WritingChapterEditPageComponent } from './components/pages/writing-chapter-edit-page/writing-chapter-edit-page.component';
import { WritingChapterNewPageComponent } from './components/pages/writing-chapter-new-page/writing-chapter-new-page.component';
import { WritingChapterBoxComponent } from './components/form-boxes/writing-chapter-box/writing-chapter-box.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WorkpieceImageLabelComponent } from './components/labels/workpiece-image-label/workpiece-image-label.component';
import { ProfileNewPostComponent } from './components/pages/profile-page/profile-main-area/profile-new-post/profile-new-post.component';
import { ProfileInfoLabelComponent } from './components/pages/profile-page/profile-info/profile-info-label/profile-info-label.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { WorkpieceCarouselLabelComponent } from './components/labels/workpiece-carousel/workpiece-carousel-label/workpiece-carousel-label.component';
import { RecomendationPostCarouselComponent } from './components/pages/start-page/recomendation-box/recomendation-post-carousel/recomendation-post-carousel.component';
import { PopupPostReadComponent } from './components/popups/popup-post-read/popup-post-read.component';
import { AutoCompleteControlComponent } from './components/controls/auto-complete-control/auto-complete-control.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { RecomendationGenreCarouselComponent } from './components/pages/start-page/recomendation-box/recomendation-genre-carousel/recomendation-genre-carousel.component';
import { GenreCarouselComponent } from './components/labels/genre-carousel/genre-carousel.component';
import { DxBoxModule, DxButtonGroupModule, DxButtonModule, DxContextMenuModule, DxDrawerModule, DxFileUploaderModule, DxFormModule, DxListModule, DxPopupModule, DxRadioGroupModule, DxResponsiveBoxModule, DxScrollViewModule, DxSelectBoxModule, DxTagBoxModule, DxTextAreaModule, DxTextBoxModule, DxToolbarModule, DxTreeViewModule } from 'devextreme-angular';
import { RadioButtonControlComponent } from './components/controls/radio-button-control/radio-button-control.component';
import { CheckBoxGroupControlComponent } from './components/controls/check-box-group-control/check-box-group-control.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule, HeaderModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { App1Component } from './app1.component';
import { ButtonGroupComponent } from './components/controls/button-group/button-group.component';
import { CreationPanelComponent } from './components/nav-bar/creation-panel/creation-panel.component';
import { HeaderComponent } from './components/nav-bar/header/header.component';
import { OuterNavbarComponent } from './components/nav-bar/outer-navbar/outer-navbar.component';
import { NavbarPanelComponent } from './components/nav-bar/navbar-panel/navbar-panel.component';
import { SideNavigationMenuComponent } from './components/nav-bar/side-navigation-menu/side-navigation-menu.component';
import { NavbarButtonComponent } from './components/nav-bar/navbar-button/navbar-button.component';
import { PopupMessageComponent } from './components/popups/popup-message/popup-message.component';
import { RerenderDirective } from './components/nav-bar/rerender.directive';
import { SearcherComponent } from './components/nav-bar/searcher/searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultPageComponent,
    WorkpieceSetupPageComponent,
    ReadPageComponent,
    WorkpieceSetupBoxComponent,
    ResultsBoxComponent,
    ResultComponent,
    RegisterPageComponent,
    FormValidationComponent,
    LoginPageComponent,
    SortBoxComponent,
    UserWorkpiecesPageComponent,
    UserWorkpieceComponent,
    UserWorkpieceChapterComponent,
    UserWorkpieceChapterListComponent,
    NewChapterComponent,
    ProfilePageComponent,
    ProfileMainAreaComponent,
    ProfileNavBarComponent,
    ProfileInfoComponent,
    WorkpiecesListComponent,
    ProfileDashboardComponent,
    ProfileSubscriptionsComponent,
    ProfileWorkpiecesListComponent,
    ReadWorkpieceComponent,
    ReadBoxComponent,
    ReadCommentBoxComponent,
    ReadChapterNavbarComponent,
    ReadWorkpiecePageComponent,
    ReadChapterNavbarComponent,
    CommentWriteComponent,
    CommentListComponent,
    NewPostPageComponent,
    NewPostBoxComponent,
    PopupEditProfileComponent,
    PopupMessageComponent,
    LoginBoxComponent,
    WorkpieceLabelComponent,
    AuthorLabelComponent,
    ChapterLabelComponent,
    InformationLabelComponent,
    PostReadComponent,
    CommentReadComponent,
    NormalControlComponent,
    SelectControlComponent,
    NumberControlComponent,
    FileControlComponent,
    MultipleFileControlComponent,
    TextAreaControlComponent,
    PopupConfirmComponent,
    CommentBoxComponent,
    RegisterBoxComponent,
    WorkpieceCarouselComponent,
    StartPageComponent,
    RecomendationBoxComponent,
    RecomendationCarouselComponent,
    WorkpieceInfoComponent,
    WorkpieceEditPageComponent,
    UserWorkpieceChapterBoxComponent,
    WritingChapterNewPageComponent,
    WritingChapterEditPageComponent,
    WritingChapterBoxComponent,
    WorkpieceImageLabelComponent,
    ProfileNewPostComponent,
    ProfileInfoLabelComponent,
    WorkpieceCarouselLabelComponent,
    RecomendationPostCarouselComponent,
    PopupPostReadComponent,
    AutoCompleteControlComponent,
    RecomendationGenreCarouselComponent,
    GenreCarouselComponent,
    RadioButtonControlComponent,
    CheckBoxGroupControlComponent,
    ButtonGroupComponent,
    CreationPanelComponent,
    HeaderComponent,
    OuterNavbarComponent,
    NavbarPanelComponent,
    SideNavigationMenuComponent,
    NavbarButtonComponent,
    RerenderDirective,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxFileDropModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatChipsModule,
    SlickCarouselModule,
    DxFormModule,
    DxBoxModule,
    DxToolbarModule,
    DxScrollViewModule,
    DxTreeViewModule,
    DxFileUploaderModule,
    DxPopupModule,
    DxDrawerModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxTagBoxModule,
    DxButtonGroupModule,
    DxButtonModule,
    DxListModule,
    DxRadioGroupModule,
    DxSelectBoxModule,
    DxContextMenuModule,
    DxResponsiveBoxModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    HeaderModule
  ],
  providers: [
    DatePipe,
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
