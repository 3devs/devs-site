import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfCaseComponent } from './portf-case.component';

describe('PortfCaseComponent', () => {
  let component: PortfCaseComponent;
  let fixture: ComponentFixture<PortfCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
