import {Component, Inject, OnInit} from '@angular/core';
import {AuctionHistory} from '@app/model/auctionHistory';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AuctionService} from '@app/services/auction.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  public loading: boolean;

  private auctionsHistory: Array<AuctionHistory>;

  constructor(private _auctionService: AuctionService,
              private _dialogRef: MatDialogRef<DeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public auctionHistory: AuctionHistory) {
  }

  ngOnInit(): void {

    this._auctionService.currentLoading.subscribe(
      loading => this.loading = loading);

    this._auctionService.currentAuctionsHistoryData.subscribe(
      auctionsHistoryData => {
        this.auctionsHistory = auctionsHistoryData;
      });
  }

  public deleteActionHistory(): void {

    this._dialogRef.disableClose = true;

    this._auctionService.changeLoadingStatus(true);

    setTimeout(() => {

      this.auctionsHistory.splice(this.auctionsHistory.findIndex((index) => {
        return index.id === this.auctionHistory.id;
      }), 1);

      this._auctionService.changeLoadingStatus(false);

      this._dialogRef.disableClose = false;

      this._auctionService.showSuccessWhenCallServices();

      this._auctionService.changeAuctionsHistoryData(this.auctionsHistory);

      this._dialogRef.close();

    }, 1000);

  }

}
