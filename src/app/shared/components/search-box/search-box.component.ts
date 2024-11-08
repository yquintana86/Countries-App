import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {


 @Input()
 public placeholder:string = '';

 @Output()
 public onValueSearch = new EventEmitter<string>();

 @ViewChild('searchInput')
 public searchInput!: ElementRef<HTMLInputElement>;

 emitValue(value: string): void{
  if(value)
  {
    this.onValueSearch.emit(value);
    this.searchInput.nativeElement.value = '';
  }
 }



}
