import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  public batches = [];

  constructor(
    private batchService: BatchService
  ) { }

  ngOnInit() {

  }

  getData() {
    this.batchService.FetchData()
    .subscribe((data) => this.batches = data);
  }

}
