/* entryComponents: NzModalCustomComponent */

import { Component, Input, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info.modal.html',
  styleUrls: ['./info.modal.scss']
})
export class InfoModalComponent {

  tplModal: NzModalRef;
  tplModalButtonLoading = false;
  htmlModalVisible = false;
  disabled = false;

  constructor(private modalService: NzModalService) {}

  createTemplatedModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });

    // this.tplModal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    // Return a result when closed
    // this.tplModal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
  }

  destroyTemplatedModal(): void {
    this.tplModal.destroy();
  }

}