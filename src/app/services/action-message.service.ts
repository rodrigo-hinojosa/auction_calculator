import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ActionMessageService {

  constructor(private _snackBar: MatSnackBar) {
  }

  show(message: string, action: string, type: string, horizontalPosition: MatSnackBarHorizontalPosition, verticalPosition: MatSnackBarVerticalPosition, duration: number) {
    this._snackBar.open(message, action, {
      panelClass: [type],
      duration: duration,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition
    });
  }

}
