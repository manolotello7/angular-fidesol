import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sol-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() titulo: string;
  @Input() autor: string;
  constructor() { }

  ngOnInit() {
  }

}
