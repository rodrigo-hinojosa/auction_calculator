import {Component, Inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material';

import {AuctionHistory} from '@app/model/auctionHistory';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public auctionHistory: AuctionHistory) {
  }

  ngOnInit(): void {
  }

}
