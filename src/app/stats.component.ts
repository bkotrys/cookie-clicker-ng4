import { Component, Inject } from '@angular/core';
import { ClickService } from './click.service';

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.css']
})
export class StatsComponent {

    public allClicks: number;

    public playingTime: string;

    constructor(@Inject(ClickService) private clickService : ClickService) { 

        this.clickService.ClickedNumber.subscribe((cnt) => {
            this.allClicks = cnt;
        });

        this.clickService.PlayingMinutes.subscribe((time) => {
            this.playingTime = time;
        });

        setInterval(() => {
            this.clickService.registerClick();
        }, 500);
    }


}