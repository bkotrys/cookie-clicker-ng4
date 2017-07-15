import { Component, Inject } from '@angular/core';
import { AchievementsService, Achievement } from './achievements.service';

@Component({
    selector: 'achievements',
    templateUrl: './achievements.component.html'
})
export class AchievementsComponent {

    constructor(@Inject(AchievementsService) private achievementsService : AchievementsService) {
        this.achievementsService.NewAchievements.subscribe((a) =>  {
            this.achievements.push(a);
        })
    }

    public achievements: Achievement[] = [];

}