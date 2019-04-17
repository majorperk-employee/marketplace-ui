import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketNavComponent } from './market-nav.component';

describe('MarketNavComponent', () => {
  let component: MarketNavComponent;
  let fixture: ComponentFixture<MarketNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
