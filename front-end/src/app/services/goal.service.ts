import { Injectable } from '@angular/core';
import { Goal } from '../goal/goal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  apiURL: string = 'http://localhost:8080/api/goal';

  constructor(
  private http: HttpClient
  ){ }

  save(goal: Goal): Observable<Goal>{
    return this.http.post<Goal>(this.apiURL, goal)
  }

  list() : Observable<Goal[]> {
    return this.http.get<Goal[]>(this.apiURL);
  }

  delete(id: any) : Observable<void> {
    const url = `${this.apiURL}/${id}`
    return this.http.delete<void>(url)
  }

    
    
  statusUpd(id: any) : Observable<Goal> {
    const url = `${this.apiURL}/${id}/upd`
    return this.http.patch<Goal>(url, {})

  }


}
