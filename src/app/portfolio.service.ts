import { Injectable } from '@angular/core';

export interface PortfolioCase {
  id: string;
  count: number;
  title: string;
  description: string;
  ext: 'jpg' | 'png';
}

const CASES: PortfolioCase[] = [
  {
    id: 'circ',
    count: 2,
    title: 'circ',
    description: '',
    ext: 'jpg'
  },
  {
    id: 'crm',
    count: 6,
    title: 'crm',
    description: 'crm',
    ext: 'png'
  },
  {
    id: 'deti',
    count: 8,
    title: 'deti',
    description: 'deti',
    ext: 'png'
  },
  {
    id: 'fin',
    count: 10,
    title: 'fin',
    description: 'fin',
    ext: 'png'
  },
  {
    id: 'land',
    count: 1,
    title: 'land',
    description: 'land',
    ext: 'png'
  },
  {
    id: 'meet',
    count: 3,
    title: 'meet',
    description: 'meet',
    ext: 'jpg'
  },
  {
    id: 'mgt',
    count: 6,
    title: 'mgt',
    description: 'png',
    ext: 'png'
  },
  {
    id: 'okt',
    count: 4,
    title: 'okt',
    description: 'okt',
    ext: 'png'
  },
  {
    id: 'qr',
    count: 6,
    title: 'qr',
    description: `    `,
    ext: 'png'
  },
  {
    id: 'rb',
    count: 8,
    title: 'rb',
    description: 'rb',
    ext: 'png'
  },
  {
    id: 'tt',
    count: 3,
    title: 'tt',
    description: 'tt',
    ext: 'jpg'
  },
  {
    id: 'zaim',
    count: 3,
    title: 'zaim',
    description: 'zaim',
    ext: 'png'
  },
  {
    id: 'zava',
    count: 2,
    title: 'zava',
    description: 'zava',
    ext: 'jpg'
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
    return `assets/portfolio/${cse.id}/${cse.id}-${index}.${cse.ext}`;
  }

}


/*

Qlanir, service to organize business / private relationships. Several types of entities: Person, Organization, Service - user could create their own, set up links and other properties, search relations, find shortest paths and explore links graph, etc.

Back end framework

Microsoft Asp.NET (C#)

Data bases

MS SQL responsible for “backup” data, elastic search and neo4j structure could be restored from it at any moment.

Elastic search is responsible for text search - fuzzy search, custom ranking etc.

Neo4j allows to traverse and search relations graph efficiently, provides algorithms to find shortest paths between entities.

Web application

Framework angularjs (coffescript + modularized jade templates)

Authentication

NodeJs app using OAuth Json Web Tokens, supports connection to external authentication providers (google, facebook etc).


*/