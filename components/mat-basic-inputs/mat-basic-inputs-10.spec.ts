import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBasicInputsDiez } from './mat-basic-inputs-10';

describe('MatBasicInputsDiez', () => {
  let component: MatBasicInputsDiez;
  let fixture: ComponentFixture<MatBasicInputsDiez>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatBasicInputsDiez]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatBasicInputsDiez);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
