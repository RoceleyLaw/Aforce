import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public questions: any;
  public answers: string[];

  constructor() {}

  ngOnInit() {
    this.questions = [{"iid":1,"A":"Angry","B":"Bored","C":"Happy","D":"Sad","ans":"A","que":"Are they?",
    "url":"https://www.youtube.com/embed/O77EZW8BGlM"},
      {"iid":2,"A":"sleepy","B":"Sad","C":"fighting","D":"bored","ans":"C","que":"Are they?",
        "url":"https://thumbs.dreamstime.com/z/group-sad-people-men-women-negative-human-emotions-87991685.jpg"}
    ]
  }

}
