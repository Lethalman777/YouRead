import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SearchPageEnum } from 'src/app/shared/enums/SearchEnum';
import { WorkpieceService } from 'src/app/shared/services/workpiece.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  formModel!:FormGroup
  suggestions:{label:string}[] = []

  constructor(private router:Router, public route:ActivatedRoute, public workpieceService:WorkpieceService){
    this.formModel = new FormGroup({
      searchTerm: new FormControl('')
    })
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event)
        this.onRouteChange(event);
      }
    });
    this.workpieceService.getWorkpieceTitles().subscribe(data=>{
      this.suggestions = data.map((item)=>{
        return {label:item.value}
      })
      console.log(this.suggestions)
    })
  }

  onRouteChange(routeEvent:any) {
    const routeSplitOne = routeEvent.urlAfterRedirects.split('?')[0]
    const routePath = routeSplitOne.split('/')[1]
    console.log(routePath)
  }

  onSearch(){
    this.router.navigate(['/search'], {
      queryParams: {
        type: SearchPageEnum.Searcher,
        searchTerm: this.searchTerm.value
      }
    });
  }

  get searchTerm() {
    return this.formModel.get('searchTerm') as FormControl;
  }
}
