import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';

import {AuctionService} from '@app/services/auction.service';
import {AUCTION_CONFIG as config} from '@app/config/auction.config';
import {Utils} from '@app/utils/';
import {Auction} from '@app/model/auction';
import {AuctionHistory} from '@app/model/auctionHistory';
import {ShowComponent} from './show/show.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public loading: boolean;

  private toggle: boolean;

  public mainFormValues: FormGroup;

  public auctionsHistory: Array<AuctionHistory>;

  ngOnInit(): void {

    this._auctionService.currentLoading.subscribe(
      loading => this.loading = loading);

    this._auctionService.currentAuctionsHistoryData.subscribe(
      auctionHistoryData => {
        this.auctionsHistory = auctionHistoryData;
      });

    this.createFormValues();

    this.toggle = true;

  }

  constructor(private _auctionService: AuctionService,
              private _formBuilder: FormBuilder,
              private _dialog: MatDialog) {
  }

  private createFormValues(): void {

    this.mainFormValues = this._formBuilder.group({
      carName: [null, Validators.maxLength(100)],
      carPrice: [null, Validators.maxLength(10)],
      administrativeCost: [200000, Validators.maxLength(10)],
      commissionAuctioneer: [12, Validators.maxLength(3)],
      commissionAuctioneerIVA: [19, Validators.maxLength(3)],
      commissionOne: [1.5, Validators.maxLength(3)],
      commissionTwo: [25330, Validators.maxLength(10)]
    });

  }

  private execCalculateAuction(auction: Auction): void {

    const auctionHistory = Utils.calculateTotalAuctionCost(auction);

    if (this.toggle) {

      this.auctionsHistory.push(auctionHistory);

      this._auctionService.changeAuctionsHistoryData(this.auctionsHistory);

    }

    this.createFormValues();

    this.OpenDialogToShow(auctionHistory);

  }

  public setToggle(event: Event): void {

    this.toggle = event['checked'];

  }

  public OpenDialogToShow(auctionHistory: AuctionHistory): void {

    this._dialog.open(ShowComponent, {
      data: auctionHistory,
      width: config.dialogSize.with
    });

  }

  public getErrorMessage(control: string): string {

    if (control) {

      const statusControl = this.mainFormValues.get(control);

      if (statusControl.hasError('required')) {
        return config.messageFormValidation.required;
      } else if (statusControl.hasError('maxlength')) {
        return config.messageFormValidation.maxlength;
      }

    }

  }

  public onSubmit(event: Event): void {

    this.execCalculateAuction(this.mainFormValues.value);

  }

}
