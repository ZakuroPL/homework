import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.sass']
})
export class CreateChallengeComponent implements OnInit {

  challengeForm:FormGroup;
  id:number;
  isClicked:boolean = false;
  isSaved:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.challengeForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern('[a-zA-Zą-żó0-9$&+,:; =@#|<>.^*()%!-]*'), Validators.minLength(10)]],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      correctAnswer: [null, Validators.required],
    });
    if(localStorage.getItem("id")) this.id = JSON.parse(localStorage.getItem("id"))
    else {
      this.id = 0;
      localStorage.setItem("id", JSON.stringify(this.id));
    }
  }
  get f() { return this.challengeForm.controls; }

  checkForm(){
    this.isClicked = true;
    if(this.challengeForm.invalid) return;
    this.isClicked = false;
    this.saveForm();
  }
  saveForm(){
    let challengesArray = []
    this.id++;
    if(localStorage.getItem("challengesArray")) challengesArray = JSON.parse(localStorage.getItem("challengesArray"))
    challengesArray.push({
      id: this.id,
      title: this.challengeForm.get('title').value,
      answer1: this.challengeForm.get('answer1').value,
      answer2: this.challengeForm.get('answer2').value,
      answer3: this.challengeForm.get('answer3').value,
      answer4: this.challengeForm.get('answer4').value,
      correctAnswer: this.challengeForm.get('correctAnswer').value,
    });
    localStorage.setItem("challengesArray", JSON.stringify(challengesArray));
    localStorage.setItem("id", JSON.stringify(this.id));
    this.challengeForm.reset();
    this.isSaved = true;
  }
}
