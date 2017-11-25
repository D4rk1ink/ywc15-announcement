import { Injectable } from '@angular/core';
import { environment } from 'environments/environment'
import { HttpClient } from '@angular/common/http'
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class InterviewService {

  private baseAPI = environment.baseAPI

  constructor(
    private fb: AngularFireDatabase,
    private http: HttpClient
  ) { }

  queryInterview (): Observable<any> {
    return this.fb.list('/').valueChanges()
  }

  addScore (key, score) {
    this.fb.list(`/${key}`).set('score', score)
  }

}
