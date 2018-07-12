import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'author', 'pages'];
  dataSource = bookData;

  export interface Books {
    name: string;
    author: string;
    pages: number;
  }

  const bookData: Books[] = [
    { name: 'Hydrogen', author: 'Pratik Bali', pages: 1000},
    { name: 'C', author: 'Denis Ritchie', pages: 600},
    { name: 'C++', author: 'Bjarne Straustrup', pages: 400},
    { name: 'Java', author: 'James Gosling', pages: 800},

  ];



}
