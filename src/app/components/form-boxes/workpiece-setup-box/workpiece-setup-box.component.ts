import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationMessage, validationMessagesList } from 'src/app/models/enums/ValidationMessage';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';
import { LanguageEnum, getLanguageValues } from 'src/app/models/enums/Language';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { Genre } from 'src/app/models/types/Genre';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GenreEnum, SelectEnum, getGenreValues } from 'src/app/models/enums/GenreEnum';
import { WorkpieceCreate, WorkpieceUpdate } from 'src/app/models/types/Workpiece';
import { TokenService } from 'src/app/services/token.service';
import { SelectOption } from '../../controls/select-control/select-control.component';

export interface WorkpieceSetupBoxProps{
  isNew:boolean
  workpiece:WorkpieceUpdate
}

@Component({
  selector: 'app-workpiece-setup-box',
  templateUrl: './workpiece-setup-box.component.html',
  styleUrls: ['./workpiece-setup-box.component.css']
})

export class WorkpieceSetupBoxComponent {
  @Input() set props(value:WorkpieceSetupBoxProps){
    this.isNew = value.isNew
    this.workpiece = value.workpiece
    this.title.setValue(value.workpiece.title)
    this.genre.setValue(value.workpiece.genre)
    this.language.setValue(value.workpiece.language)
    this.description.setValue(value.workpiece.description)
  }
  isNew:boolean=true
  workpiece!:WorkpieceUpdate
  userProfileId:number=0
  //genres:SelectOption[]=getOptionsFromEnum(Object.keys(GenreEnum), Object.values(GenreEnum))
  genres:SelectEnum<GenreEnum>[]=getGenreValues()
  languages:SelectEnum<LanguageEnum>[]=getLanguageValues()
  formModel:FormGroup
  messages:ValidationMessage[]

  constructor(private userService:UserService,
    private workpieceService:WorkpieceService,
    private tokenService:TokenService,
    private storageService:StorageService){
    this.messages=validationMessagesList()
    this.formModel = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      image: new FormControl(new FormData()),
      genre: new FormControl(this.genres[0].enum),
      language: new FormControl(this.languages[0].enum)
    });
    this.userProfileId = Number(tokenService.get())
  }

  public submit(){
    if(!this.formModel.valid){
      return
    }
    console.log(this.isNew)
    if(this.isNew){
      const workpiece:WorkpieceCreate={
        title: this.title.value,
        description: this.description.value,
        image: '',
        userProfileId: this.userProfileId,
        language: this.language.value,
        genre: this.genre.value
      }
      console.log(workpiece)
      this.storageService.uploadImage(this.image.value).subscribe(data=>{
        console.log(data)
        workpiece.image = data.image
        this.workpieceService.createWorkpiece(workpiece).subscribe(data1=>{
          console.log(data1)
        })
      })
    }
    else{
      const workpiece:WorkpieceUpdate={
        title: this.title.value,
        description: this.description.value,
        image: this.workpiece.image,
        userProfileId: this.userProfileId,
        id: this.workpiece.id,
        genre: Number(this.genre.value),
        language: Number(this.language.value),
        // genre: GenreEnum.customary,
        // language: LanguageEnum.Polski,
        dateOfPublication: this.workpiece.dateOfPublication,
        isPublished: this.workpiece.isPublished
      }

      if((this.image.value as FormData).getAll('').length > 0){
        this.storageService.uploadImage(this.image.value).subscribe(data=>{
          console.log(data)
          workpiece.image = data.image
          this.workpieceService.updateWorkpiece(workpiece).subscribe(data1=>{
            console.log(data1)
          })
        })
      } else {
        console.log(workpiece)
        this.workpieceService.updateWorkpiece(workpiece).subscribe(data=>{
          console.log(data)
        })
      }

    }

  }

  handleFileInput($event: Event) {
    console.log("hjj")
    }

  get title() {
    return this.formModel.get('title') as FormControl;
  }
  get description() {
    return this.formModel.get('description') as FormControl;
  }
  get genre() {
    return this.formModel.get('genre') as FormControl;
  }
  get language() {
    return this.formModel.get('language') as FormControl;
  }
  get image() {
    return this.formModel.get('image') as FormControl;
  }
}


