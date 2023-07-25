import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output() SearchEvent: EventEmitter<string> = new EventEmitter<string>();
  searchTerm:string = "a"

  onSearch(){
    this.SearchEvent.emit(this.searchTerm)
  }
}
