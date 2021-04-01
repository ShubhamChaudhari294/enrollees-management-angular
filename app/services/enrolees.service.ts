import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Enrollee } from '../interfaces/enrollee.interface';

@Injectable({
  providedIn: 'root',
})
export class EnroleesService {
  constructor(private http: HttpClient) {}

  getEnrolees() {
    return this.http.get<Enrollee[]>(environment.url + '/enrollees');
  }

  getEnroleesDetails (id: string) {
    return this.http.get<Enrollee>(environment.url + '/enrollees/' + id);
  }

  editEnroleesDetails(enroleeData: Enrollee, id: string) {
    return this.http.put<Enrollee>(environment.url + '/enrollees/' + id, enroleeData);
  }
}
