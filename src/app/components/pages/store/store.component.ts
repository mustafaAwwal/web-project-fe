import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  data = [
    {  
      id:"1", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display",
      price: "5000"
    },
    {
      id:"2",
      name:"HTC",
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"3",
      name:"HTC",
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"4", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"5", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"6", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6' Display", 
      price: "5000"
    },
    {
      id:"7", 
      name:"HTC", 
      src:"https://cdn2.gsmarena.com/vv/bigpic/htc-desire-650.jpg", 
      detail:"FHD 6's Display", 
      price: "5000"
    }
  ];
  constructor() { }

  ngOnInit() {
    
  }

}
