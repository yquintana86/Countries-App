import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

private debouncer: Subject<string> = new Subject<string>();
private debouncerSubscription?: Subscription;

 @Input()
 public placeholder:string = '';

 @Input()
 public initialValueSearch:string = '';

 @Output()
 public onValueSearch = new EventEmitter<string>();

 @Output()
 public onDebouncer = new EventEmitter<string>();

 @ViewChild('searchInput')
 public searchInput!: ElementRef<HTMLInputElement>;


 ngOnInit(): void {
  this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe( value =>
      {
        this.onDebouncer.emit(value)
      });
}

ngOnDestroy(): void {
  this.debouncerSubscription?.unsubscribe();
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
