import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public FetchData()
  {
    return [
            {"Name":"C", "Price":500, "Author":"Denis Ritchie"},
            {"Name":"C++", "Price":400, "Author":"Straustrup"},
            {"Name":"JAVA", "Price":800, "Author":"james Gosling"}
          ];
  }

}
