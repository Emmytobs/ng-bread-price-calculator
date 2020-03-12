import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadListComponent } from './bread-list.component';

describe('BreadListComponent', () => {
  let component: BreadListComponent;
  let fixture: ComponentFixture<BreadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
