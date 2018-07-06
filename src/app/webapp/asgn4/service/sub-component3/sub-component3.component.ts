import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component3',
  templateUrl: './sub-component3.component.html',
  styleUrls: ['./sub-component3.component.css']
})
export class SubComponent3 implements OnInit {

  constructor(private bookService: BookService) { }

  public bookName = [];

  ngOnInit() {
  }

  GetData() {
    this.bookName = this.bookService.FetchData();
  }

}
