import { Component } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;

  constructor(private dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.openNotifications();
  }

  openNotifications() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
    height: '600px',
    width: '700px',
});
    const snack = this.snackBar.open('Server will be down from VVVV to DDDDD', 'Contact IT Support', {
         // duration: 2000,
          panelClass: ['red-snackbar']
});

    dialogRef.afterClosed().subscribe((showSnackBar: boolean) => {
      if (showSnackBar) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open('Server will be down from VVVV to DDDDD', 'Contact IT Support', {
          duration: 2000,
          panelClass: ['red-snackbar']
});
      }
    });
  }
}

@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirmation-dialog.html',
})
export class ConfirmationDialog {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>) { }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */