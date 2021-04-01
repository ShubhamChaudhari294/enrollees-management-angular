'use strict'
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdbTableDirective } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { EnroleesService } from 'src/app/services/enrolees.service';
import { takeUntil } from 'rxjs/operators';
import { Enrollee } from 'src/app/interfaces/enrollee.interface';
import * as XLSX from 'ts-xlsx';
@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss'],
})
export class EnrolleeComponent implements OnInit {
  
  constructor(
    private cdRef: ChangeDetectorRef,
    private enroleesService: EnroleesService,
    private route: Router
  ) {}

  ngOnInit() {
   
  }
  arrayBuffer:any;
  file:any;
  incomingfile(event: any) 
    {
    this.file= event.target.files[0]; 
    }
  
   Upload() {
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
          }
          fileReader.readAsArrayBuffer(this.file);
  }
}
