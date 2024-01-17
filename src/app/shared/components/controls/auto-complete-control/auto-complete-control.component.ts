import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Tags } from 'src/app/shared/constants/TagConstants';

export interface AutoCompleteControlProps{
  label:string,
  placeHolder:string,
  allTags: {label: string}[]
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
    this.allTags = value.allTags
    this.tags = this.allTags
  }

  props!:AutoCompleteControlProps
  @Input()formControl:FormControl = new FormControl([])
  @Input()label:string=""
  @Input()placeHolder:string=""
  formTag: FormControl = new FormControl('');
  @Input()allTags: {label: string}[] = []
  tags:{label:string}[] = []

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
