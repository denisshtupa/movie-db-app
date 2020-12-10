import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})

export class MainComponent {
    public type: string | null = "new-movies";
    
    constructor(private _activatedRoute: ActivatedRoute) {
        this._activatedRoute.url.subscribe(e => {
            this.type = this._activatedRoute.snapshot.paramMap.get("type");
            console.log("🚀 ~ file: main.component.ts ~ line 15 ~ MainComponent ~ constructor ~  this.type ",  this.type )
        });
    }

  

}
