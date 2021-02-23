import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { challenge } from '../model';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.sass']
})
export class ChallengeComponent implements OnInit {

  challengesArray:challenge[];
  challenge:challenge;
  id:number;
  selected:number;

  isCorrect:boolean;
  ischecked:boolean = false;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(id);
    this.challengesArray = JSON.parse(localStorage.getItem("challengesArray"));
    let index:number = this.challengesArray.findIndex(obj => obj.id === this.id);
    this.challenge = this.challengesArray[index];
  }
  select(num:number){
    this.selected = num;
    this.ischecked = false;
    this.isCorrect = false;
  }
  check(){
    if(this.selected){
      this.ischecked = true;
      this.isCorrect = this.selected == this.challenge.correctAnswer
    }
  }

}
