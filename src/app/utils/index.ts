import {Auction} from '@app/model/auction';
import {AuctionHistory} from '@app/model/auctionHistory';

import * as moment from 'moment';

export class Utils {

  public static calculateTotalAuctionCost(auction: Auction): AuctionHistory {

    const commissionAuctioneerTotal = (auction.carPrice * (auction.commissionAuctioneer / 100));

    const commissionAuctioneerIVATotal = (commissionAuctioneerTotal * (auction.commissionAuctioneerIVA / 100));

    const commissionOneTotal = (auction.carPrice * (auction.commissionOne) / 100);

    const total = auction.carPrice + auction.administrativeCost + auction.commissionTwo + commissionAuctioneerTotal + commissionAuctioneerIVATotal + commissionOneTotal;

    const date = moment().format('DD-MM-YYYY HH:mm:ss');

    const auctionHistory = new AuctionHistory({
      auction,
      commissionAuctioneerTotal,
      commissionAuctioneerIVATotal,
      commissionOneTotal,
      total,
      date
    });

    return auctionHistory;

  }

  public timeID() {

    const now = new Date().getUTCMilliseconds();

    return now;

  }

}
