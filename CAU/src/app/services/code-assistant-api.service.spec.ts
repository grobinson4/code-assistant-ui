import { TestBed } from '@angular/core/testing';

import { CodeAssistantApiService } from './code-assistant-api.service';

describe('CodeAssistantApiService', () => {
  let service: CodeAssistantApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeAssistantApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
