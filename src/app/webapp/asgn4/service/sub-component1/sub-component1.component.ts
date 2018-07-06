import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component1',
  templateUrl: './sub-component1.component.html',
  styleUrls: ['./sub-component1.component.css']
})
export class SubComponent1 implements OnInit {

  constructor(private bookService: BookService) { }

  public bookName = [];

  ngOnInit() {
  }

  GetData() {
    this.bookName = this.bookService.FetchData();
  }

}
