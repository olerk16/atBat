import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from './services/websocket.service';
import { Subscription } from 'rxjs';
import { PlayerChartComponent } from './components/player-chart/player-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayerChartComponent],
  template: `
   <h1>Baseball Stats</h1>
   <ul>
     <li *ngFor="let player of players">
       {{ player.name }} - Average: {{ player.average }}
     </li>
   </ul>
   <app-player-chart [data]="players"></app-player-chart>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  players: any[] = [
    { name: 'Player 1', average: 0.312 },
    { name: 'Player 2', average: 0.278 },
    { name: 'Player 3', average: 0.345 },
  ];

  private subscription: Subscription = new Subscription();

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.subscription = this.websocketService.onMessage().subscribe((data) => {
      this.players = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.websocketService.close();
  }
}
