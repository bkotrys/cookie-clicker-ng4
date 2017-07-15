import { Component, Inject } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent {

    public allClicks: number;

    public playingTime: string;

    public clicksPerSecond: number;

    public canBuyNewClicker: boolean;

    constructor(@Inject(ClickService) private clickService : ClickService) { 

        this.clickService.ClickedNumber.subscribe((cnt) => {
            this.allClicks = cnt;
        });

        this.clickService.PlayingMinutes.subscribe((time) => {
            this.playingTime = time;
        });

        this.clickService.ClicksPerSecond.subscribe((cps) => {
            this.clicksPerSecond = cps;
        });

        this.clickService.CanBuyNewClicker.subscribe((can) => {
            this.canBuyNewClicker = can;
        })
    }
}