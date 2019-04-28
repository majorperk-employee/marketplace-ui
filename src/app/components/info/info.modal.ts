/* entryComponents: NzModalCustomComponent */

import { Component, Input, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { RewardModalComponent } from '../reward-modal/reward-modal.component';
import { Brand } from '@app/models/market';

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

  rewardModal: NzModalRef;
  rewardModalLoading = false;
  rewardModalVisible = false;

  isVisible = false;
  itemId: number;

  constructor(private modalService: NzModalService) { }

  createTemplatedModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  createRewardModal(brand: Brand): void {
    let itemId = brand.id;
    const modal = this.modalService.create({
      nzTitle: `${brand.brandName}`,
      nzContent: RewardModalComponent,
      nzComponentParams: {
        id: itemId,
      },
      nzFooter: [{
        label: 'Thanks!',
        shape: 'primary',
        onClick: () => modal.destroy()
      }]
    });
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>Complete ?</i>',
      nzContent: '',
      nzOnOk: () => console.log('OK')
    });
  }

  showDeleteConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Remove these items from cart?',
      nzContent: '',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => console.log('OK'), 
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  destroyTemplatedModal(): void {
    this.tplModal.destroy();
  }

}