import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {any} from "codelyzer/util/function";

@Injectable()
export class IncidentService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get('http://localhost:8080/incident/incidents');
  }
}
