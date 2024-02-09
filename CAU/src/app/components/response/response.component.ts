import { Component,OnInit } from '@angular/core';
import{ CodeAssistantApiService } from '../../services/code-assistant-api.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import csharp from 'highlight.js/lib/languages/csharp';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('csharp', csharp);

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})

export class ResponseComponent implements OnInit{
  
  message: any;
  private subscription: Subscription = new Subscription();

  

  constructor(private codeAssistantApiService: CodeAssistantApiService) { }
  ngOnInit() {
  this.subscription = this.codeAssistantApiService.currentResponse.subscribe(response => {
    this.message = response.choices[0].message.content;
    hljs.highlight(this.message, {language: 'C#'}).value
  })

}
}
