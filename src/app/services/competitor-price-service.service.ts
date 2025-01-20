import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompetitorPriceService {
  private apiUrl = 'http://localhost:8080/competitor-prices';

  constructor(private http: HttpClient) {}

  getAllCompetitorPrices(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get/all`);
  }

  getPrices(productId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${productId}`);
  }

}

