import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  img: string;
}
@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center;margin-top:30px" class="content">
      <h1>
        欢迎来到 {{title}}!
      </h1>
      <div>
        <mat-card  *ngFor="let i of imgs" class="example-card">
          <img (click)="openDialog(i)" mat-card-image src="assets/images/{{i}}" alt="">
        </mat-card>
      </div>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .example-card {
    max-width: 300px;
    margin: 10px;
    float: left;
    }
  `]
})
export class AppComponent {
  title = '猎人：荒野的召唤';
  imgs = [ "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"]
  constructor(public dialog: MatDialog) {}
  openDialog(imgurl:string) {
    this.dialog.open(DialogElementsExampleDialog,{
      data:{
        img:imgurl
      }
    });
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  template:  `
    <div style="max-width: 60vw;" >
    <img style="width: 100%;" src="assets/images/{{data.img}}" alt="">
    </div>

  `,
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
