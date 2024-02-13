import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from,Observable, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import OpenAI from "openai";
import { environment } from '../../environments/environment';
const openai = new OpenAI({ apiKey: environment.openaiApiKey, dangerouslyAllowBrowser: true});



@Injectable({
  providedIn: 'root'
})
export class CodeAssistantApiService {

  private responseSource = new BehaviorSubject<any>(null);
  currentResponse = this.responseSource.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  updateResponse(response: any) {
    this.responseSource.next(response);
  }
  
  test(message: any, language: any): Observable<any>{
    return from ( openai.chat.completions.create({
      messages: [{"role": "system", "content": "Act as the world's best computer scientist and translate the following psuedocode to " + language + "\n" + message}],
      model: "gpt-3.5-turbo",
    }));
    
    // return completion.choices[0];
    // console.log(completion.choices[0]);
    
  }
  sendDescription(messages: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/chatCompletion', { messages }, { headers });
  }

  
}
