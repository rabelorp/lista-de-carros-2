import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cars } from '../models/cars.model';

const baseUrl = 'https://run.mocky.io/v3/24fda311-d8b1-49ca-b35d-74ea1949020d';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  loading = false;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cars> {
    this.loading = true;
    return this.http.get<Cars>(baseUrl);
  }
}
