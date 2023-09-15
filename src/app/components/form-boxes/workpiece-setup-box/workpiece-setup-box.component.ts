import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';
import { LanguageEnum, getLanguageValues } from 'src/app/models/enums/Language';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GenreEnum, SelectEnum, getGenreValues } from 'src/app/models/enums/GenreEnum';
import { WorkpieceCreate, WorkpieceUpdate } from 'src/app/models/types/Workpiece';
import { TokenService } from 'src/app/services/token.service';
import { SelectOption } from '../../controls/select-control/select-control.component';
import { Router } from '@angular/router';

export interface WorkpieceSetupBoxProps{
  isNew:boolean
  workpiece:WorkpieceUpdate
  label:string
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
    this.tags.setValue(value.workpiece.tags)
    this.image.setValue(value.workpiece.image)

    this.userProfileId = value.workpiece.userProfileId
    this.label = value.label
  }
  label:string=''
  isNew:boolean=true
  workpiece!:WorkpieceUpdate
  userProfileId:number=0
  genres:SelectEnum<GenreEnum>[]=getGenreValues()
  languages:SelectEnum<LanguageEnum>[]=getLanguageValues()
  formModel:FormGroup
  isError:boolean=false
  formData:any={}
  loading:boolean=false

  constructor(private userService:UserService,
    private workpieceService:WorkpieceService,
    private tokenService:TokenService,
    private storageService:StorageService,
    private router:Router){
    this.formModel = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      image: new FormControl(''),
      genre: new FormControl('', [
        Validators.required
      ]),
      language: new FormControl('', [
        Validators.required
      ]),
      tags: new FormControl([])
    });
  }

  public submit(){
    console.log("fgfgfg")
    if(!this.formModel.valid){
      this.isError = true
      return
    }
    console.log(this.isNew)
    if(this.isNew){
      const workpiece:WorkpieceCreate={
        title: this.title.value,
        description: this.description.value,
        image: this.image.value,
        userProfileId: this.userProfileId,
        language: Number(this.language.value),
        genre: Number(this.genre.value),
        tags: this.tags.value
      }
      console.log(workpiece)
      this.workpieceService.createWorkpiece(workpiece).subscribe(data=>{
        console.log(data)
        this.router.navigate(['user-workpieces', this.userProfileId])
      })
    }
    else{
      const workpiece:WorkpieceUpdate={
        title: this.title.value,
        description: this.description.value,
        image: this.image.value,
        userProfileId: this.userProfileId,
        id: this.workpiece.id,
        genre: Number(this.genre.value),
        language: Number(this.language.value),
        // genre: GenreEnum.customary,
        // language: LanguageEnum.Polski,
        dateOfPublication: this.workpiece.dateOfPublication,
        isPublished: this.workpiece.isPublished,
        tags: this.tags.value
      }

      this.workpieceService.updateWorkpiece(workpiece).subscribe(data=>{
        console.log(data)
        this.router.navigate(['user-workpieces', this.userProfileId])
      })
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
  get tags() {
    return this.formModel.get('tags') as FormControl;
  }
}


