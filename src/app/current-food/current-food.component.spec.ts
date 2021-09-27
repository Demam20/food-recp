import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFoodComponent } from './current-food.component';

describe('CurrentFoodComponent', () => {
  let component: CurrentFoodComponent;
  let fixture: ComponentFixture<CurrentFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
