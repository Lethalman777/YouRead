import { Component, EventEmitter, Output } from '@angular/core';
import { WorkpieceService } from '../../../../services/workpiece.service';
import { FormControl, FormGroup } from '@angular/forms';
import { getGenreOptions } from 'src/app/models/enums/GenreEnum';
import { getDateRadio } from 'src/app/models/functions/Date';
import { SearchParam } from 'src/app/models/types/Search';
import { SearchDataTypeEnum, SearchOperatorEnum, TypeOfEnum } from 'src/app/models/enums/SearchEnum';
import { getEmptyParam, getSearchParam } from 'src/app/models/functions/SearchFunction';
import { CheckBoxOption } from 'src/app/models/types/Control';

@Component({
  selector: 'app-sort-box',
  templateUrl: './sort-box.component.html',
  styleUrls: ['./sort-box.component.css']
})
export class SortBoxComponent {
  @Output() SortEvent:EventEmitter<{searchParam:SearchParam, searchTerm:string}> = new EventEmitter<{searchParam:SearchParam, searchTerm:string}>()
  loading = false
  formModel!:FormGroup
  radioOptions=getDateRadio()
  constructor(){
    this.formModel=new FormGroup({
      searchTerm: new FormControl(''),
      dateRange: new FormControl(),
      genres: new FormControl(getGenreOptions()),
      tags: new FormControl([])
    })
    console.log(this.dateRange.value)
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
