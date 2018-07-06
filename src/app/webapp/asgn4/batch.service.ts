import { BatchModel } from './http/batch.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BatchService {

  constructor(private http: HttpClient) {}

  private API_URL = '../../../assets/Data/Batches.json';

  public FetchData(): Observable<BatchModel[]> {
    return this.http.get<BatchModel[]>(this.API_URL);
  }

}
