import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {
  univ: any;

  constructor(private univService: UniversityService) { }

  ngOnInit(): void {
    this.univList();
  }


  univList(): void {
    this.univService.getAllUniversities().subscribe((res) => {
      this.univ = res;
      console.log(res);
    })
  }

}
