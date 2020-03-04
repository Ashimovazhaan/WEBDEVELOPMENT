import { Component, OnInit } from '@angular/core';
import { iphones, Iphone } from '../iphones';

@Component({
  selector: 'app-iphone-list',
  templateUrl: './iphone-list.component.html',
  styleUrls: ['./iphone-list.component.css']
})
export class IphoneListComponent implements OnInit {
  iphones = iphones;

  share(iphone: Iphone): void {
    window.alert(`The ${iphone.name} has been shared`);
    // tslint:disable-next-line:triple-equals
    if (iphone.name == 'Xiaomi Redmi Note 7 Pro') {
      // tslint:disable-next-line:max-line-length
      window.location.href = 'https://telegram.me/share/url?url=https://aliexpress.ru/item/33060222114.html?spm=a2g0o.productlist.0.0.d308143aggpYCL&algo_pvid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed&algo_expid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed-0&btsid=0be3743b15814899905755461eb1b5&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_%27%D1%91';
    }
    // tslint:disable-next-line:triple-equals
    if (iphone.name == 'Xiaomi Redmi 8') {
      // tslint:disable-next-line:max-line-length
      window.location.href = 'https://telegram.me/share/url?url=https://aliexpress.ru/item/4000423683776.html?spm=a2g0o.productlist.0.0.d308143aggpYCL&algo_pvid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed&algo_expid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed-3&btsid=0be3743b15814899905755461eb1b5&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
    }

    // tslint:disable-next-line:triple-equals
    if (iphone.name == 'Xiaomi mi A2') {
      // tslint:disable-next-line:max-line-length
      window.location.href = 'https://telegram.me/share/url?url=https://aliexpress.ru/item/32901203607.html?spm=a2g0o.productlist.0.0.d308143aggpYCL&algo_pvid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed&algo_expid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed-9&btsid=0be3743b15814899905755461eb1b5&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
    }

  }
  buy(iphone: Iphone): void {
    // tslint:disable-next-line:triple-equals
    if (iphone.name == 'Xiaomi Redmi Note 7 Pro') {
      // tslint:disable-next-line:max-line-length
      window.location.href = 'https://aliexpress.ru/item/33060222114.html?spm=a2g0o.productlist.0.0.d308143aggpYCL&algo_pvid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed&algo_expid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed-0&btsid=0be3743b15814899905755461eb1b5&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_%27%D1%91';
    }
    // tslint:disable-next-line:triple-equals
    if (iphone.name == 'Xiaomi Redmi 8') {
      // tslint:disable-next-line:max-line-length
      window.location.href = 'https://aliexpress.ru/item/4000423683776.html?spm=a2g0o.productlist.0.0.d308143aggpYCL&algo_pvid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed&algo_expid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed-3&btsid=0be3743b15814899905755461eb1b5&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
    }

    // tslint:disable-next-line:triple-equals
    if (iphone.name == 'Xiaomi mi A2') {
      // tslint:disable-next-line:max-line-length
      window.location.href = 'https://aliexpress.ru/item/32901203607.html?spm=a2g0o.productlist.0.0.d308143aggpYCL&algo_pvid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed&algo_expid=2afc6b36-bb91-4c29-a76f-9ad39ac30fed-9&btsid=0be3743b15814899905755461eb1b5&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
