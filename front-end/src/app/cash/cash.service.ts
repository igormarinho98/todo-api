import { Injectable } from '@angular/core';
import { Cash } from './cash';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class CashService {
    apiURL: string = 'http://localhost:8080/api/cash';

    constructor (
     private http: HttpClient
    ) {}

    save(cash: Cash) : Observable<Cash> {
        return this.http.post<Cash>(this.apiURL, cash)
    }

    list() : Observable<Cash[]> {
        return this.http.get<Cash[]>(this.apiURL);
    }

    delete(id: any) : Observable<void> {
        const url = `${this.apiURL}/${id}`
        return this.http.delete<void>(url)
    }

    
    markPaid(id: any) : Observable<Cash> {
    const url = `${this.apiURL}/${id}/paid`
    return this.http.patch<Cash>(url, {})
  } 

    
  }