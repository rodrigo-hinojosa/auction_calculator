import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {AuctionService} from '@app/services/auction.service';

import {AUCTION_CONFIG as config} from '@app/config/auction.config';

import {AuctionHistory} from '@app/model/auctionHistory';
import {DeleteComponent} from '@app/components/main/delete/delete.component';
import {EditComponent} from '@app/components/main/edit/edit.component';
import {ShowComponent} from '@app/components/main/show/show.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public loading: boolean;
  public auctionsHistory: Array<AuctionHistory>;
  public pageSizeOptions = [5, 10, 25, 100];
  public displayedColumns = ['carName', 'date', 'carPrice', 'administrativeCost', 'commissionAuctioneerTotal', 'commissionAuctioneerIVATotal', 'commissionOneTotal', 'commissionTwo', 'total', 'actions'];
  public dataSource: MatTableDataSource<AuctionHistory>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _auctionService: AuctionService,
              private _dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.refreshHistoryDataTable(this.auctionsHistory);

    this._auctionService.currentLoading.subscribe(
      loading => this.loading = loading);

    this._auctionService.currentAuctionsHistoryData.subscribe(
      auctionsHistoryData => {
        this.auctionsHistory = auctionsHistoryData;
        this.dataSource._updateChangeSubscription();
      });

    this.initHistoryTable();

    this.startPaginator();

  }

  private startPaginator(): void {

    // Set First page of table
    this.paginator.firstPage();

    this.paginator._changePageSize(5);

    // The paginator can be set after view init if static data!
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private refreshHistoryDataTable(auctionsHistory: Array<AuctionHistory>): void {

    this.dataSource = new MatTableDataSource(auctionsHistory);

  }

  private getAuctionsHistoryData(): Array<AuctionHistory> {

    return this._auctionService.auctionsHistory();

  }

  public OpenDialogToShow(auctionHistory: AuctionHistory): void {

    this._dialog.open(ShowComponent, {
      data: auctionHistory,
      width: config.dialogSize.with
    });

  }

  private OpenDialogToDelete(auctionHistory: AuctionHistory): void {

    this._dialog.open(DeleteComponent, {
      data: auctionHistory,
      width: config.dialogSize.with
    });

  }

  private OpenDialogToEdit(auctionHistory: AuctionHistory): void {

    this._dialog.open(EditComponent, {
      data: auctionHistory,
      width: '1200px'
    });

  }

  public initHistoryTable(): void {

    this._auctionService.changeLoadingStatus(true);

    this.auctionsHistory = this.getAuctionsHistoryData();

    this._auctionService.changeAuctionsHistoryData(this.auctionsHistory);

    this.refreshHistoryDataTable(this.auctionsHistory);

    setTimeout(() => {
      this._auctionService.changeLoadingStatus(false);
    }, 2000);

  }

  public applyFilter(filterValue: string): void {

    this.dataSource.filterPredicate = (data, filter) => data.auction.carName.toString().includes(filter) ||
      data.auction.carPrice.toString().includes(filter);

    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

  }

  public showAuctionHistory(auctionHistory: AuctionHistory): void {
    this.OpenDialogToShow(auctionHistory);
  }

  public deleteAuctionHistory(auctionHistory: AuctionHistory): void {
    this.OpenDialogToDelete(auctionHistory);
  }

  public editAuctionHistory(actionHistory: AuctionHistory): void {
    this.OpenDialogToEdit(actionHistory);
  }

}
