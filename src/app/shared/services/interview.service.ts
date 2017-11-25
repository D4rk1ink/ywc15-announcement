import { Injectable } from '@angular/core';
import { environment } from 'environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class InterviewService {

  private baseAPI = environment.baseAPI

  constructor(
    private http: HttpClient
  ) { }

  queryInterview (): Promise<any> {
    const endpointAPI = this.baseAPI + '/interview'
    return this.http.get(endpointAPI).toPromise()
  }

}
