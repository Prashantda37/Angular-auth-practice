import { Component, ContentChildren, Input, OnChanges, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable, MatColumnDef } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit, OnChanges {

  @Input('data') tableData:any;
  @Input() displayedColumns:any;
  
  constructor() { }
  
  data:any = [];

  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef> | undefined;
  
  ngOnInit(): void { }

  ngOnChanges(){
    this.data = new MatTableDataSource<any>(this.tableData?.results || []);
  }

  ngAfterContentInit() {
    this.columnDefs?.forEach(columnDef => this.table?.addColumnDef(columnDef));
  }
}
