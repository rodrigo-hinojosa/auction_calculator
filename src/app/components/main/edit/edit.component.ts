import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuctionHistory} from '@app/model/auctionHistory';
import {AuctionService} from '@app/services/auction.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Auction} from '@app/model/auction';
import {Utils} from '@app/utils';
import {AUCTION_CONFIG as config} from '@app/config/auction.config';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public loading: boolean;

  public editFormValues: FormGroup;

  public auctionsHistory: Array<AuctionHistory>;

  constructor(private _auctionService: AuctionService,
              private _formBuilder: FormBuilder,
              private _dialogRef: MatDialogRef<EditComponent>,
              @Inject(MAT_DIALOG_DATA) public auctionHistory: AuctionHistory) {
  }

  ngOnInit(): void {

    this._auctionService.currentLoading.subscribe(
      loading => this.loading = loading);

    this._auctionService.currentAuctionsHistoryData.subscribe(
      auctionHistoryData => {
        this.auctionsHistory = auctionHistoryData;
      });

    this.createFormValues();

  }

  private createFormValues(): void {

    this.editFormValues = this._formBuilder.group({
      carName: [this.auctionHistory.auction.carName, Validators.maxLength(100)],
      carPrice: [this.auctionHistory.auction.carPrice, Validators.maxLength(10)],
      administrativeCost: [this.auctionHistory.auction.administrativeCost, Validators.maxLength(10)],
      commissionAuctioneer: [this.auctionHistory.auction.commissionAuctioneer, Validators.maxLength(3)],
      commissionAuctioneerIVA: [this.auctionHistory.auction.commissionAuctioneerIVA, Validators.maxLength(3)],
      commissionOne: [this.auctionHistory.auction.commissionOne, Validators.maxLength(3)],
      commissionTwo: [this.auctionHistory.auction.commissionTwo, Validators.maxLength(10)]
    });

  }

  private execCalculateAuction(auction: Auction): void {

    this._dialogRef.disableClose = true;

    this._auctionService.changeLoadingStatus(true);

    setTimeout(() => {

      Object.assign(this.auctionHistory, Utils.calculateTotalAuctionCost(auction));

      this._auctionService.changeLoadingStatus(false);

      this._dialogRef.disableClose = false;

      this._auctionService.showSuccessWhenCallServices();

      this._auctionService.changeAuctionsHistoryData(this.auctionsHistory);

      this._dialogRef.close();

    }, 1000);

  }

  public getErrorMessage(control: string): string {

    if (control) {

      const statusControl = this.editFormValues.get(control);

      if (statusControl.hasError('required')) {
        return config.messageFormValidation.required;
      } else if (statusControl.hasError('maxlength')) {
        return config.messageFormValidation.maxlength;
      }

    }

  }

  public editAuction(): void {
    this.execCalculateAuction(this.editFormValues.value);
  }

}
