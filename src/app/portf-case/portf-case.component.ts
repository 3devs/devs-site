import { Component, OnInit } from '@angular/core';
import { range, pipe } from 'ramda';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { PortfolioService, PortfolioCase } from '../portfolio.service';

@Component({
  selector: 'app-portf-case',
  templateUrl: './portf-case.component.html',
  styleUrls: ['./portf-case.component.scss']
})
export class PortfCaseComponent implements OnInit {


  constructor(private readonly route: ActivatedRoute, private readonly portfolio: PortfolioService) { }

  ngOnInit() {
  }

  get case() {
    return this.portfolio.case(this.route.snapshot.params['id']);
  }

  get images() {
    const cse = this.case;
    return range(1, cse.count).map(x => this.portfolio.getImageUrl(cse, x));
  }

}
