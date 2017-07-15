import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs';

export class ClickService  {
    
    private _clicks: Subject<number> = new Subject<number>();

    private _allClicks: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    private _seconds: Observable<number>;

    public registerClick(): void {
        this._clicks.next(1);
    }

    public get Clicks(): Observable<number> {
        return this._clicks;
    }

    public get ClickedNumber(): Observable<number> {
        return this._allClicks;
    }

    public get ClicksPerSecond(): Observable<number> {
        const totalDelayed2s = this.ClickedNumber.delay(2000).startWith(0);
        const totalDelayed1s = this.ClickedNumber.delay(1000).startWith(0);
        const last =  Observable.combineLatest(totalDelayed1s, totalDelayed2s, (t, td) => {
            return t - td;
        });

        return Observable.interval(1000).withLatestFrom(last, (r, l) => l);
    }

    public get PlayingSeconds(): Observable<number> {
        return this._seconds;
    }

    public get PlayingMinutes(): Observable<string> {
        return this._seconds.map((sec: number) => {
            const minutes = Math.floor(sec / 60);
            const seconds = sec % 60;

            return `${minutes}:${seconds}`;
        });
    }

    constructor() {
        this.Clicks.scan((acc, curr, idx) => {
            acc+=1;
            return acc;
        }).subscribe((allClicks) => {
            this._allClicks.next(allClicks);
        });

        this._seconds = Observable.interval(1000);
    }

}