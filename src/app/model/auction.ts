export class Auction {

  carName: string;
  carPrice: number;
  commissionAuctioneer: number;
  commissionAuctioneerIVA: number;
  commissionOne: number;
  commissionTwo: number;
  administrativeCost: number;

  public constructor(attributes: {
    carName?: string;
    carPrice?: number;
    administrativeCost?: number;
    commissionAuctioneer?: number;
    commissionAuctioneerIVA?: number;
    commissionOne?: number;
    commissionTwo?: number;
  } = {}) {
    this.carName = attributes.carName || null;
    this.carPrice = attributes.carPrice || 0;
    this.administrativeCost = attributes.administrativeCost || 0;
    this.commissionAuctioneer = attributes.commissionAuctioneer || 0;
    this.commissionAuctioneerIVA = attributes.commissionAuctioneerIVA || 0;
    this.commissionOne = attributes.commissionOne || 0;
    this.commissionTwo = attributes.commissionTwo || 0;
  }

}
