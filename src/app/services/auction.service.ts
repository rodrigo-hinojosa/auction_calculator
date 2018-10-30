import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

import {AUCTION_CONFIG as config} from '@app/config/auction.config';
import {Auction} from '@app/model/auction';
import {AuctionHistory} from '@app/model/auctionHistory';
import {ActionMessageService} from '@app/services/action-message.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private loading = new BehaviorSubject<boolean>(true);

  public currentLoading = this.loading.asObservable();

  private auctionsHistoryData = new BehaviorSubject<Array<AuctionHistory>>([]);

  public currentAuctionsHistoryData = this.auctionsHistoryData.asObservable();

  constructor(private _actionMessageService: ActionMessageService) {
  }

  public changeLoadingStatus(status: boolean): void {
    this.loading.next(status);
  }

  public changeAuctionsHistoryData(auctionsHistory: Array<AuctionHistory>): void {
    this.auctionsHistoryData.next(auctionsHistory);
  }

  public showErrorWhenCallServices() {

    this._actionMessageService.show(config.messageSnackBar.error.message,
      config.messageSnackBar.error.action,
      config.messageSnackBar.error.type,
      'right',
      'bottom',
      config.messageSnackBar.error.duration);

  }

  public showSuccessWhenCallServices() {

    this._actionMessageService.show(config.messageSnackBar.success.message,
      config.messageSnackBar.success.action,
      config.messageSnackBar.success.type,
      'right',
      'bottom',
      config.messageSnackBar.success.duration);

  }

  public auctionsHistory(): Array<AuctionHistory> {

    const auctionsHistory = [];

    const a = new Auction({
      carName: 'Name1',
      carPrice: 100000,
      administrativeCost: 200000,
      commissionAuctioneer: 12,
      commissionAuctioneerIVA: 19,
      commissionOne: 1.5,
      commissionTwo: 21330
    });

    const b = new Auction({
      carName: 'Name2',
      carPrice: 2000000,
      administrativeCost: 200000,
      commissionAuctioneer: 12,
      commissionAuctioneerIVA: 19,
      commissionOne: 1.5,
      commissionTwo: 21330
    });

    const c = new Auction({
      carName: 'Name3',
      carPrice: 3000000,
      administrativeCost: 200000,
      commissionAuctioneer: 12,
      commissionAuctioneerIVA: 19,
      commissionOne: 1.5,
      commissionTwo: 21330
    });

    const d = new Auction({
      carName: 'Name4',
      carPrice: 3000000,
      administrativeCost: 200000,
      commissionAuctioneer: 12,
      commissionAuctioneerIVA: 19,
      commissionOne: 1.5,
      commissionTwo: 21330
    });

    const aa = new AuctionHistory({
      id: '1',
      auction: a,
      commissionAuctioneerTotal: 300,
      commissionAuctioneerIVATotal: 20,
      commissionOneTotal: 10,
      total: 5000000,
      date: '15-10-2018'
    });

    const bb = new AuctionHistory({
      id: '2',
      auction: b,
      commissionAuctioneerTotal: 300,
      commissionAuctioneerIVATotal: 20,
      commissionOneTotal: 10,
      total: 5000000,
      date: '15-10-2018'
    });

    const cc = new AuctionHistory({
      id: '3',
      auction: c,
      commissionAuctioneerTotal: 300,
      commissionAuctioneerIVATotal: 20,
      commissionOneTotal: 10,
      total: 5000000,
      date: '15-10-2018'
    });

    const dd = new AuctionHistory({
      id: '4',
      auction: d,
      commissionAuctioneerTotal: 300,
      commissionAuctioneerIVATotal: 20,
      commissionOneTotal: 10,
      total: 5000000,
      date: '15-10-2018'
    });

    auctionsHistory.push(aa, bb, cc, dd);

    return auctionsHistory;

  }

}
