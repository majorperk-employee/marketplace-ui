import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RewardDrawerComponent } from './reward-drawer.component';

describe('RewardDrawerComponent', () => {
  let component: RewardDrawerComponent;
  let fixture: ComponentFixture<RewardDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
