import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkpieceSetupBoxComponent } from './shared/components/form-boxes/workpiece-setup-box/workpiece-setup-box.component';
import { ResultsBoxComponent } from './shared/components/boxes/results-box/results-box.component';
import { FormValidationComponent } from './shared/components/form-boxes/form-validation/form-validation.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { SortBoxComponent } from './shared/components/form-boxes/sort-box/sort-box.component';
import { UserWorkpieceComponent } from './shared/components/boxes/user-workpiece/user-workpiece.component';
import { UserWorkpieceChapterComponent } from './shared/components/labels/user-workpiece-chapter/user-workpiece-chapter.component';
import { UserWorkpieceChapterListComponent } from './shared/components/lists/user-workpiece-chapter-list/user-workpiece-chapter-list.component';
import { ProfileMainAreaComponent } from './shared/components/boxes/profile-main-area/profile-main-area.component';
import { ProfileNavBarComponent } from './shared/components/boxes/profile-nav-bar/profile-nav-bar.component';
import { ProfileInfoComponent } from './shared/components/boxes/profile-info/profile-info.component';
import { ProfileDashboardComponent } from './shared/components/lists/profile-dashboard/profile-dashboard.component';
import { ProfileSubscriptionsComponent } from './shared/components/lists/profile-subscriptions/profile-subscriptions.component';
import { ProfileWorkpiecesListComponent } from './shared/components/lists/profile-workpieces-list/profile-workpieces-list.component';
import { ReadWorkpieceComponent } from './shared/components/boxes/read-workpiece/read-workpiece.component';
import { ReadBoxComponent } from './shared/components/boxes/read-box/read-box.component';
import { ReadCommentBoxComponent } from './shared/components/boxes/read-comment-box/read-comment-box.component';
import { ReadChapterNavbarComponent } from './shared/components/boxes/read-chapter-navbar/read-chapter-navbar.component';
import { ReadWorkpiecePageComponent } from './shared/components/labels/read-workpiece-page/read-workpiece-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPostBoxComponent } from './shared/components/form-boxes/new-post-box/new-post-box.component';
import { PopupEditProfileComponent } from './shared/components/popups/popup-edit-profile/popup-edit-profile.component';
import { LoginBoxComponent } from './shared/components/form-boxes/login-box/login-box.component';
import { WorkpieceLabelComponent } from './shared/components/labels/workpiece-label/workpiece-label.component';
import { NormalControlComponent } from './shared/components/controls/normal-control/normal-control.component';
import { FileControlComponent } from './shared/components/controls/file-control/file-control.component';
import { NumberControlComponent } from './shared/components/controls/number-control/number-control.component';
import { SelectControlComponent } from './shared/components/controls/select-control/select-control.component';
import { AuthorLabelComponent } from './shared/components/labels/author-label/author-label.component';
import { ChapterLabelComponent } from './shared/components/labels/chapter-label/chapter-label.component';
import { TextAreaControlComponent } from './shared/components/controls/text-area-control/text-area-control.component';
import { MultipleFileControlComponent } from './shared/components/controls/multiple-file-control/multiple-file-control.component';
import { PopupConfirmComponent } from './shared/components/popups/popup-confirm/popup-confirm.component';
import { InformationLabelComponent } from './shared/components/labels/information-label/information-label.component';
import { PostReadComponent } from './shared/components/labels/post-read/post-read.component';
import { CommentBoxComponent } from './shared/components/boxes/comment-box/comment-box.component';
import { CommentListComponent } from './shared/components/lists/comment-list/comment-list.component';
import { CommentWriteComponent } from './shared/components/form-boxes/comment-write/comment-write.component';
import { CommentReadComponent } from './shared/components/labels/comment-read/comment-read.component';
import { RegisterBoxComponent } from './shared/components/form-boxes/register-box/register-box.component';
import { WorkpieceCarouselComponent } from './shared/components/labels/workpiece-carousel/workpiece-carousel.component';
import { RecomendationBoxComponent } from './shared/components/boxes/recomendation-box/recomendation-box.component';
import { RecomendationCarouselComponent } from './shared/components/carousels/recomendation-carousel/recomendation-carousel.component';
import { DatePipe } from '@angular/common';
import { WorkpieceInfoComponent } from './shared/components/labels/workpiece-info/workpiece-info.component';
import { UserWorkpieceChapterBoxComponent } from './shared/components/boxes/user-workpiece-chapter-box/user-workpiece-chapter-box.component';
import { WritingChapterBoxComponent } from './shared/components/form-boxes/writing-chapter-box/writing-chapter-box.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WorkpieceImageLabelComponent } from './shared/components/labels/workpiece-image-label/workpiece-image-label.component';
import { ProfileNewPostComponent } from './shared/components/form-boxes/profile-new-post/profile-new-post.component';
import { ProfileInfoLabelComponent } from './shared/components/labels/profile-info-label/profile-info-label.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { WorkpieceCarouselLabelComponent } from './shared/components/labels/workpiece-carousel-label/workpiece-carousel-label.component';
import { RecomendationPostCarouselComponent } from './shared/components/carousels/recomendation-post-carousel/recomendation-post-carousel.component';
import { PopupPostReadComponent } from './shared/components/popups/popup-post-read/popup-post-read.component';
import { AutoCompleteControlComponent } from './shared/components/controls/auto-complete-control/auto-complete-control.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { RecomendationGenreCarouselComponent } from './shared/components/carousels/recomendation-genre-carousel/recomendation-genre-carousel.component';
import { GenreCarouselComponent } from './shared/components/labels/genre-carousel/genre-carousel.component';
import { DxAutocompleteModule, DxBoxModule, DxButtonGroupModule, DxButtonModule, DxContextMenuModule, DxDrawerModule, DxFileUploaderModule, DxFormModule, DxListModule, DxPopupModule, DxRadioGroupModule, DxResponsiveBoxModule, DxScrollViewModule, DxSelectBoxModule, DxTagBoxModule, DxTextAreaModule, DxTextBoxModule, DxToolbarModule, DxTooltipModule, DxTreeViewModule } from 'devextreme-angular';
import { RadioButtonControlComponent } from './shared/components/controls/radio-button-control/radio-button-control.component';
import { CheckBoxGroupControlComponent } from './shared/components/controls/check-box-group-control/check-box-group-control.component';
import { ButtonGroupComponent } from './shared/components/controls/button-group/button-group.component';
import { HeaderComponent } from './layouts/navbar-layout/header/header.component';
import { PopupMessageComponent } from './shared/components/popups/popup-message/popup-message.component';
import { RerenderDirective } from './shared/directives/rerender.directive';
import { CreationPanelComponent } from './layouts/navbar-layout/creation-panel/creation-panel.component';
import { NavbarButtonComponent } from './layouts/navbar-layout/navbar-button/navbar-button.component';
import { NavbarPanelComponent } from './layouts/navbar-layout/navbar-panel/navbar-panel.component';
import { OuterNavbarComponent } from './layouts/navbar-layout/outer-navbar/outer-navbar.component';
import { SearcherComponent } from './layouts/navbar-layout/searcher/searcher.component';
import { SideNavigationMenuComponent } from './layouts/navbar-layout/side-navigation-menu/side-navigation-menu.component';
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
import { AuthService } from './shared/services/auth.service';
import { ScreenService } from './shared/services/screen.service';
import { WorkpiecesListComponent } from './shared/components/lists/workpieces-list/workpieces-list.component';
import { TagControlComponent } from './shared/components/controls/tag-control/tag-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultPageComponent,
    WorkpieceSetupPageComponent,
    ReadPageComponent,
    WorkpieceSetupBoxComponent,
    ResultsBoxComponent,
    RegisterPageComponent,
    FormValidationComponent,
    LoginPageComponent,
    SortBoxComponent,
    UserWorkpiecesPageComponent,
    UserWorkpieceComponent,
    UserWorkpieceChapterComponent,
    UserWorkpieceChapterListComponent,
    ProfilePageComponent,
    ProfileMainAreaComponent,
    ProfileNavBarComponent,
    ProfileInfoComponent,
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
    SearcherComponent,
    WorkpiecesListComponent,
    TagControlComponent
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
    DxTooltipModule,
    DxAutocompleteModule,
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
  ],
  providers: [
    DatePipe,
    AuthService,
    ScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
