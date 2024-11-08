import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {

private debouncer: Subject<string> = new Subject<string>();

 @Input()
 public placeholder:string = '';

 @Output()
 public onValueSearch = new EventEmitter<string>();

 @Output()
 public onDebouncer = new EventEmitter<string>();

 @ViewChild('searchInput')
 public searchInput!: ElementRef<HTMLInputElement>;

 ngOnInit(): void {
  this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe( value =>
      {
        this.onDebouncer.emit(value)
      });
}

 emitValue(value: string): void{
  if(value)
  {
    this.onValueSearch.emit(value);
    this.searchInput.nativeElement.value = '';
  }
}

 onKeyPressed(value: string): void{
  if(value)
  {
    this.debouncer.next(value);
  }
 }

}
