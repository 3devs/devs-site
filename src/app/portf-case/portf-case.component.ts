import { Component, OnInit } from '@angular/core';
import { range, pipe } from 'ramda';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { PortfolioService, PortfolioCase } from '../portfolio.service';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

@Component({
  selector: 'app-portf-case',
  templateUrl: './portf-case.component.html',
  styleUrls: ['./portf-case.component.scss']
})
export class PortfCaseComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly portfolio: PortfolioService
  ) {}

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = this.images.map(m => {
      return {
        small: m,
        medium: m,
        big: m
      };
    });
  }

  get case() {
    return this.portfolio.case(this.route.snapshot.params['id']);
  }

  get images() {
    const cse = this.case;
    return range(1, cse.count).map(x => this.portfolio.getImageUrl(cse, x));
  }
}
