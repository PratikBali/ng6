import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component2',
  templateUrl: './sub-component2.component.html',
  styleUrls: ['./sub-component2.component.css']
})
export class SubComponent2 implements OnInit {

  constructor(private bookService: BookService) { }

  public bookName = [];

  ngOnInit() {
  }

  GetData() {
    this.bookName = this.bookService.FetchData();
  }

}
