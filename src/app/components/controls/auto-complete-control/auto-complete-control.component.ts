import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NormalControlProps } from '../normal-control/normal-control.component';
import { Observable, startWith, map } from 'rxjs';
import { Tags } from 'src/app/models/constants/TagConstants';
import { Item } from 'devextreme/ui/drop_down_button';

export interface AutoCompleteControlProps{
  label:string,
  placeHolder:string
}

@Component({
  selector: 'app-auto-complete-control',
  templateUrl: './auto-complete-control.component.html',
  styleUrls: ['./auto-complete-control.component.css']
})
export class AutoCompleteControlComponent {
  @Input() set controlProps(value:AutoCompleteControlProps){
    console.log(value)
    this.props=value
    this.filteredOptions = this.formTag.value
    // .pipe(
    //   startWith(''),
    //   map((value:string) => this._filter(value))
    // );
  }

  props!:AutoCompleteControlProps
  @Input()formControl:FormControl = new FormControl([])
  formTag: FormControl = new FormControl('');
  allTags: {label: string}[] = Object.values(Tags).map((tag)=>{
    return {label: tag}
  })
  tags:{label:string}[] = this.allTags

//   data:Array<{id: Number, label: String, icon: String}> = [
//     { id: 1, label: "My profile", icon: "user" },
//     { id: 2, label: "Messages", icon: "email" },
//     { id: 3, label: "Contacts", icon: "group" },
//     { id: 4, label: "Log out", icon: "runner" }
// ];
  filteredOptions!: string[];

  constructor() {
    console.log(this.allTags)
  }

  onValueChanged(e:any){
    this.formControl.setValue(e.value)
    console.log(this.formControl.value)
    this.tags = this.filter()
  }

  filter(): {label:string}[] {
    return this.allTags.filter((option) =>
      !this.formControl.value.includes(option.label)
    );
  }

  addTag(tag: string): void {
    if (tag && !this.formControl.value.includes(tag)) {
      this.formControl.value.push(tag);
      this.formTag.setValue('')
    }
    console.log(this.formControl.value)
  }

  removeTag(tag: string): void {
    const index = this.formControl.value.indexOf(tag);
    if (index !== -1) {
      this.formControl.value.splice(index, 1);
    }
  }
}
