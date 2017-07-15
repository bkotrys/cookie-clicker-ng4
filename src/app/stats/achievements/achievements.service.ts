import { Inject } from '@angular/core';
import { ClickService } from '../../services/click.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class AchievementsService {

    constructor(@Inject(ClickService) private clickService: ClickService) {
        this.clickService.ClickedNumber.subscribe(clickedNo => {
            const possibleAchievements = this._availableAchievements.filter(a => a.bonus.type === BonusType.COOKIES && a.bonus.count <= clickedNo);
            if(!possibleAchievements)
                return;

            const achievements = possibleAchievements.filter(a => !this._achievements.find(e => e == a));
            if(achievements.length < 1)
                return;
            
            this._achievements.push(achievements[0]);

            this._newAchievements.next(achievements[0]);
        });  
    }

    private _newAchievements: Subject<Achievement> = new Subject<Achievement>();
    
    public get NewAchievements() {
        return this._newAchievements;
    }

    private _achievements: Achievement[] = [];

    private _availableAchievements: Achievement[] =  [
        {
            name: '1-cursor',
            bonus: {
                count: 1,
                type: BonusType.CURSOR
                }
        },
        {
            name: '5-cursors',
            bonus: {
                count: 5,
                type: BonusType.CURSOR
            }
        },
        {
            name: '1-grandma',
            bonus: {
                count: 1,
                type: BonusType.GRANDMA
            }
        },
        {
            name: '5-grandmas',
            bonus: {
                count: 5,
                type: BonusType.GRANDMA
            }
        },
        {
            name: '10-cookies',
            bonus: {
                count: 10,
                type: BonusType.COOKIES
            }
        },
        {
            name: '100-cookies',
            bonus: {
                count: 100,
                type: BonusType.COOKIES
            }
        },
        {
            name: '1000-cookies',
            bonus: {
                count: 1000,
                type: BonusType.COOKIES
            }
        },
]

}

export interface Achievement {
    name: string;
    bonus?: {
        type: BonusType,
        count: number
    } 
}

export enum BonusType {
    CURSOR, GRANDMA, COOKIES
}