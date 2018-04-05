import { Component, OnInit } from '@angular/core';
import { PortfolioCase, PortfolioService } from '../portfolio.service';
import { splitEvery } from 'ramda';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private readonly portfolio: PortfolioService) { }

  ngOnInit() {
  }

  get rows() {
    return splitEvery(3, this.portfolio.cases);
  }

  trackBy(index: number) {
    return index;
  }

  trackByCase(index: number, cse: PortfolioCase) {
    return cse.id;
  }

  caseImageUrl(cse: PortfolioCase) {
    return this.portfolio.getImageUrl(cse, 1);
  }


}
