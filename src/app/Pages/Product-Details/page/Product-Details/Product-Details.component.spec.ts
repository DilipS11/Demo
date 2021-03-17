import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewOfIonApiCallsComponent } from './list-view-of-ion-api-calls.component';

describe('ListViewOfIonApiCallsComponent', () => {
  let component: ListViewOfIonApiCallsComponent;
  let fixture: ComponentFixture<ListViewOfIonApiCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewOfIonApiCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewOfIonApiCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
