import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  selectedFeature= new EventEmitter<string>();

  onSelect(input:string, event:Event){
    this.selectedFeature.emit(input);
  }
}
