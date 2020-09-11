import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecustomersComponent } from './listecustomers.component';

describe('ListecustomersComponent', () => {
  let component: ListecustomersComponent;
  let fixture: ComponentFixture<ListecustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
