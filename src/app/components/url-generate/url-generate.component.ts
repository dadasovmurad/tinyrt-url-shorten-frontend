import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-url-generate',
  templateUrl: './url-generate.component.html',
  styleUrls: ['./url-generate.component.css']
})
export class UrlGenerateComponent implements OnInit {
  inputUrl:string = '';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
