import { Component, Input, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-games-items',
  templateUrl: './games-items.component.html',
  styleUrls: ['./games-items.component.css']
})
export class GamesItemsComponent implements OnInit {
  @Input() question: any;
  @Input() i: number;
  @Input() answer: string;

  constructor(private sanitizer:DomSanitizer) {

  }

  ngOnInit() {
  }

  transform(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  correct(){
    return this.question.ans==this.answer
  }
}
