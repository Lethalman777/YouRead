import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkpieceUpdate } from 'src/app/models/types/Workpiece';
import { WorkpieceService } from 'src/app/services/workpiece.service';

@Component({
  selector: 'app-workpiece-edit-page',
  templateUrl: './workpiece-edit-page.component.html',
  styleUrls: ['./workpiece-edit-page.component.css']
})
export class WorkpieceEditPageComponent {
  workpiece!:WorkpieceUpdate

  constructor(private workpieceService:WorkpieceService, private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.workpieceService.getWorkpieceUpdate(id).subscribe(data=>{
        this.workpiece=data
        console.log(this.workpiece)
      })
      console.log(id)
    })
  }
}
