import { Component } from '@angular/core';
import{ CodeAssistantApiService } from '../../services/code-assistant-api.service';



@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent {
  messages = '';
  textAreaContent: any = '';
  selectedLanguage: any = '';
  constructor(private codeAssistantApiService: CodeAssistantApiService) { }
  


  sendDescription() {
    const message = document.getElementById('messages')!.innerText;
    console.log(message);
    console.log(this.textAreaContent);

    this.codeAssistantApiService.test(this.textAreaContent, this.selectedLanguage).subscribe(response => {
      this.codeAssistantApiService.updateResponse(response);
      console.log(response);
    });
  }

}
