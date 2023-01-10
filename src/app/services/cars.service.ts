import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cars } from 'src/app/models/cars.model';

const baseUrl =
  'https://sp.vtex.com/search-api/v1/localizaseminovos/api/search/tipo/seminovo';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  loading = false;

  constructor(private http: HttpClient) {}

  getAll(page = 1): Observable<Cars> {
    this.loading = true;
    return this.http.get<Cars>(`${baseUrl}?map=tipo&page=${page}`);
  }
}
