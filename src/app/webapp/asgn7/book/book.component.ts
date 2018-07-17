import { Component, OnInit } from '@angular/core';

export interface Books {
  name: string;
  author: string;
  pages: number;
  price: number;
}

const bookData: Books[] = [
  { name: 'Hydrogen', author: 'Pratik Bali', pages: 1000, price: 1000},
  { name: 'C', author: 'Denis Ritchie', pages: 600, price: 1000},
  { name: 'C++', author: 'Bjarne Straustrup', pages: 400, price: 1000},
  { name: 'Java', author: 'James Gosling', pages: 800, price: 1000},
];

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() {}
  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'author', 'pages', 'price'];
  dataSource = bookData;


}
