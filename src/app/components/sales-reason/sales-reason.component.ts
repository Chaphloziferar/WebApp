import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesReason } from 'src/app/models/sales-reason';
import { SalesReasonService } from 'src/app/services/sales-reason.service';

@Component({
  selector: 'app-sales-reason',
  templateUrl: './sales-reason.component.html',
  styleUrls: ['./sales-reason.component.css']
})
export class SalesReasonComponent implements OnInit {
  SalesReason: Observable<SalesReason[]>;

  constructor(private srs: SalesReasonService){
    this.SalesReason = new Observable<SalesReason[]>;
  }

  ngOnInit(): void {
    this.SalesReason = this.srs.getAllSalesReason();
  }
}
