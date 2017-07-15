import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoockieContainerStatsComponent } from './coockie-container-stats.component';

describe('CoockieContainerStatsComponent', () => {
  let component: CoockieContainerStatsComponent;
  let fixture: ComponentFixture<CoockieContainerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoockieContainerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoockieContainerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
