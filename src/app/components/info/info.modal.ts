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

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
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

  destroyTemplatedModal(): void {
    this.tplModal.destroy();
  }

}