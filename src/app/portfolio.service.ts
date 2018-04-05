import { Injectable } from '@angular/core';

export interface PortfolioCase {
  id: string;
  count: number;
  title: string;
  description: string;
}

const CASES: PortfolioCase[] = [
  {
    id: 'circ',
    count: 2,
    title: 'circ',
    description: 'circ'
  },
  {
    id: 'crm',
    count: 6,
    title: 'crm',
    description: 'crm'
  },
  {
    id: 'deti',
    count: 8,
    title: 'deti',
    description: 'deti'
  },
  {
    id: 'fin',
    count: 10,
    title: 'fin',
    description: 'fin'
  },
  {
    id: 'land',
    count: 1,
    title: 'land',
    description: 'land'
  },
  {
    id: 'meet',
    count: 3,
    title: 'meet',
    description: 'meet'
  },
  {
    id: 'mgt',
    count: 6,
    title: 'mgt',
    description: 'mgt'
  },
  {
    id: 'okt',
    count: 4,
    title: 'okt',
    description: 'okt'
  },
  {
    id: 'qr',
    count: 6,
    title: 'qr',
    description: 'qr'
  },
  {
    id: 'rb',
    count: 8,
    title: 'rb',
    description: 'rb'
  },
  {
    id: 'tt',
    count: 3,
    title: 'tt',
    description: 'tt'
  },
  {
    id: 'zaim',
    count: 3,
    title: 'zaim',
    description: 'zaim'
  },
  {
    id: 'zava',
    count: 2,
    title: 'zava',
    description: 'zava'
  },


];

@Injectable()
export class PortfolioService {

  constructor() { }

  get cases() { return CASES; }

  case(id: string) {
    return CASES.find(x => x.id === id);
  }

  getImageUrl(cse: PortfolioCase, index: number) {
    return `assets/portfolio/${cse.id}/${cse.id}-${index}.png`;
  }

}
