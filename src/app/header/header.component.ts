import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../Shared/data-storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.onDataSave();
  }

  FetchRecipeData(){
    this.dataStorageService.onFetchRecipe().subscribe();
  }
  @Output()
  selectedFeature= new EventEmitter<string>();

  onSelect(input:string, event:Event){
    this.selectedFeature.emit(input);
  }
}
