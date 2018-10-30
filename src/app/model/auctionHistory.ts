import {Auction} from '@app/model/auction';

export class AuctionHistory {

  id: string;
  auction: Auction;
  commissionAuctioneerTotal: number;
  commissionAuctioneerIVATotal: number;
  commissionOneTotal: number;
  total: number;
  date: string;

  public constructor(attributes: {
    auction?: Auction;
    id?: string;
    commissionAuctioneerTotal?: number;
    commissionAuctioneerIVATotal?: number;
    commissionOneTotal?: number;
    total?: number;
    date?: string;
  } = {}) {
    this.id = attributes.id || null;
    this.auction = attributes.auction || null;
    this.commissionAuctioneerTotal = attributes.commissionAuctioneerTotal || 0;
    this.commissionAuctioneerIVATotal = attributes.commissionAuctioneerIVATotal || 0;
    this.commissionOneTotal = attributes.commissionOneTotal || 0;
    this.total = attributes.total || 0;
    this.date = attributes.date || null;
  }

}
