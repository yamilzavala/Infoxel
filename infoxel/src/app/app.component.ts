import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
import { ItemModel } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'infoxel';
  // items: ItemModel[] = [];
  items: any[] = [];
  errorInfo = null;
  isFetching = false;
  show = false;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {  }

  onFetchData(texto: any) {
    console.log(texto);
    this.isFetching = true;
    this.dataStorageService.fetchData(texto).subscribe((resp) => {
      this.isFetching = false;
      console.log('resp: ', resp.welos);
      // const organizedItems = resp.sort(((a, b) => a.node.created - b.node.created));
      this.items = resp.welos;
      console.log('Items:', this.items);
      // this.items = resp.items;
     }
      , error => {
        this.isFetching = false;
        console.log(error);
        this.errorInfo = error.message;
    });
  }

  onHandleError() {
    this.isFetching = false;
    this.errorInfo = null;
  }

  showMore() {
    this.show = !this.show;
  }




}
