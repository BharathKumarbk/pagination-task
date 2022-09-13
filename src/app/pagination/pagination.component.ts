import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  title = 'pagination-task';
  univ: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  sizes: any = [];
  constructor(private univService: UniversityService) { }

  ngOnInit(): void {
    this.univList();

  }

  univList(): void {
    this.univService.getAllUniversities().subscribe((res) => {
      this.univ = res;
    })
  }

  onPageDataChange(event: any) {
    this.page = event;
    this.univList();
  }

  onPageSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.univList();
  }


}
