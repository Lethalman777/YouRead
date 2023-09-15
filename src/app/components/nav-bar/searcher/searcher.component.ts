import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SearchPageEnum } from 'src/app/models/enums/SearchEnum';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  formModel!:FormGroup

  constructor(private router:Router, public route:ActivatedRoute){
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
