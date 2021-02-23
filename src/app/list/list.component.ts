import { Component, OnInit } from '@angular/core';
import { challenge } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  challengesArray:challenge[];

  isEmpty:boolean;

  constructor() { }

  ngOnInit(): void {
    this.getArrayFromLocalStorage();
  }

  getArrayFromLocalStorage(){
    this.challengesArray = JSON.parse(localStorage.getItem("challengesArray"))
    if(!this.challengesArray) this.isEmpty = true;
    if(!localStorage.getItem("id")) localStorage.removeItem("challengesArray");
  }
  delete(id:number){
    for(let c of this.challengesArray){
      if(c.id == id) {
        let index:number = this.challengesArray.findIndex(obj => obj.id === id);
        this.challengesArray.splice(index, 1)
        localStorage.setItem("challengesArray", JSON.stringify(this.challengesArray));
      }
    }
  }
}
