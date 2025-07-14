import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBasicDividerSeisComponent } from './mat-chip-set-seis';

describe('MatBasicDividerSeisComponent', () => {
  let component: MatBasicDividerSeisComponent;
  let fixture: ComponentFixture<MatBasicDividerSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicDividerSeisComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MatBasicDividerSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
