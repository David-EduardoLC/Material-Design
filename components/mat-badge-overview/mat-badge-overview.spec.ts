import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBadgeOverviewComponent } from './mat-badge-overview';

describe('MatBadgeOverviewComponent', () => {
  let component: MatBadgeOverviewComponent;
  let fixture: ComponentFixture<MatBadgeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBadgeOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBadgeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
