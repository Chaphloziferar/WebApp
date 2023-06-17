import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { SalesReason } from '../models/sales-reason';

@Injectable({
  providedIn: 'root'
})
export class SalesReasonService {

  url = "http://jocanales-001-site1.etempurl.com/api/SalesReason";

  constructor(private http: HttpClient) { }

  getAllSalesReason(): Observable<SalesReason[]> {
    return this.http.get<SalesReason[]>(this.url);
  }
}
