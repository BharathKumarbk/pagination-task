import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://universities.hipolabs.com/search?country=India";

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) { }

  getAllUniversities(): Observable<any> {
    return this.http.get(url);
  }
}
