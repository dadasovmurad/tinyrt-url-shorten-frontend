import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css'],
})
export class QrGenerateComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit(): void {
  }
}
