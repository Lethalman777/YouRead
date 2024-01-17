import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getDateRadio } from 'src/app/shared/functions/Date';
import { SearchDataTypeEnum, SearchOperatorEnum, TypeOfEnum } from 'src/app/shared/enums/SearchEnum';
import { getEmptyParam, getSearchParam } from 'src/app/shared/functions/SearchFunction';
import { CheckBoxOption } from 'src/app/shared/models/Control';
import { SearchParam } from 'src/app/shared/models/Search';
import { WorkpieceService } from 'src/app/shared/services/workpiece.service';
import { SortByEnum, getSortByOptions } from 'src/app/shared/enums/SortByEnum';
import { getGenreCheckboxes, getGenreValues } from 'src/app/shared/enums/GenreEnum';

@Component({
  selector: 'app-sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.css']
})
export class SortBoxComponent {
  @Output() SortEvent:EventEmitter<{searchParam:SearchParam, searchTerm:string}> = new EventEmitter<{searchParam:SearchParam, searchTerm:string}>()
  loading = false
  formModel!:FormGroup
  suggestions:{label:string}[] = []
  radioOptions=getDateRadio()
  constructor(public workpieceService:WorkpieceService){
    this.formModel=new FormGroup({
      searchTerm: new FormControl(''),
      dateRange: new FormControl(),
      genres: new FormControl(getGenreCheckboxes()),
      tags: new FormControl([])
    })
    console.log(this.dateRange.value)
  }

  ngOnInit(): void {
    this.workpieceService.getWorkpieceTitles().subscribe(data=>{
      this.suggestions = data.map((item)=>{
        return {label:item.value}
      })
      console.log(this.suggestions)
    })
  }

  async onSubmit() {
    if(this.formModel.invalid){
      return
    }
    const searchParam:SearchParam = getEmptyParam()
    let isSomeGenre:boolean = false
    this.genres.value.forEach((element:CheckBoxOption) => {
      if(element.isChecked){
        if(!isSomeGenre){
          searchParam.params.push(getSearchParam(undefined, undefined, undefined, undefined, undefined, false, true))
          isSomeGenre=true
        }
        searchParam.params[searchParam.params.length-1].params.push(getSearchParam('Genre', element.value, SearchDataTypeEnum.genreEnum))
      }
    });
    if(this.tags.value.length > 0){
      searchParam.params.push(getSearchParam(undefined, undefined, undefined, undefined, undefined, false, true))
    }
    this.tags.value.forEach((element:string)=>{
      searchParam.params[searchParam.params.length-1].params.push(getSearchParam('WorkpieceTags', 0, SearchDataTypeEnum.number, SearchOperatorEnum.greaterThan, undefined, undefined, undefined, undefined, undefined, undefined,
        true, 'Count', getSearchParam('Tag', element, undefined, undefined, undefined, undefined, undefined, undefined,
        'v', TypeOfEnum.WorkpieceTag)))
    })

    if(this.dateRange.value != null){
      console.log("hjh")
      searchParam.params.push(getSearchParam('CreationDate', this.dateRange.value, SearchDataTypeEnum.date, SearchOperatorEnum.greaterThanOrEqual))
    }

    console.log(this.dateRange.value)
    this.loading = true;

    this.loading = false;
    this.SortEvent.emit({searchParam:searchParam, searchTerm:this.searchTerm.value})
  }

  get searchTerm() {
    return this.formModel.get('searchTerm') as FormControl;
  }

  get dateRange() {
    return this.formModel.get('dateRange') as FormControl;
  }

  get genres() {
    return this.formModel.get('genres') as FormControl;
  }

  get tags() {
    return this.formModel.get('tags') as FormControl;
  }
}

