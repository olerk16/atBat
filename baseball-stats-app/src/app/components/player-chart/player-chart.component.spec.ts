import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerChartComponent } from './player-chart.component';

describe('PlayerChartComponent', () => {
  let component: PlayerChartComponent;
  let fixture: ComponentFixture<PlayerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
