import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() set inputWorkpieceResult(value:WorkpieceLabel){
    this.result=value
    // this.storageService.getWorkpieceImage(this.result.imagePath).subscribe(data=>{
    //   this.image=data
    // })
  }
  result!:WorkpieceLabel
  image!:string

  constructor(private router:Router, private storageService:StorageService){

  }

  read(){
    this.router.navigate(['/read', this.result.id])
  }
}
