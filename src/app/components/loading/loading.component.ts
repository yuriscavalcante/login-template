import { Component } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class LoadingComponent {
  public visible = true;
  constructor(
    private confirmationService: ConfirmationService, private messageService: MessageService
  ){
  }


}
