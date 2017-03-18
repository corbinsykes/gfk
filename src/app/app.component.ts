import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    selection = 2;
    paragraphs = [];

    quotes = [
        "Lose the bumps!",
        "Use hot water when you shave to avoid lookin' like the back of a Nestlé Crunch Bar.",
        "Diversify!",
        "You gotta have mad hustle.",
        "Make sure to have Plan B, C, D, E and F ready to go.",
        "Screw a key, you might fuck around and catch an axe.",
        "When they stop listenin' to you and start talking shit, it’s time to go.",
        "Ramen with Louis Rich turkey (gotta be Louis Rich).",
        "Y'all smart dumb cats need to wisen up!",
        "Scooby snack. Jurassic. Plastic. Gas. Booby Trap",
        "Things change. Nothing ever stays the same, yo.",
        "You ain't never gonna stay 25 or 30 or 40.",
        "You always gonna change. Every day you change.",
        "Super-cali-fragalistic-expiali-docious, Docious-ali-expi-fragalistic-cali-super.",
        "Cancun...catch me in the room, eatin' grouper.",
        "I wear what fits Ghostface; I'm not gonna wear anything that makes me look strange.",
        "The God's tropical.",
        "Ladies call me 'Black Fruit Punch'.",
        "It was the beauty that caught me and held my soul hostage.",
        "Remember those days? Had you smellin' my boxers.",
        "Chop the O, sprinkle a little snow inside the optimo.",
        "Swing the John McEnroe, rap rock'n'roll.",
        "Tidy Bowl, gun hold pro, Starsky with the gumsole.",
        "Hit the rum slow, parole kids, live Rapunzel."
    ]

    ngOnInit() {
        this.buildParagraphs(2);
    }

    buildParagraph() {
        let paragraph = '';

        while(paragraph.length < 700) {
            paragraph += _.sample(this.quotes) + ' ';
        }
        this.paragraphs.push(paragraph);
    }

    buildParagraphs(paragraphCount: number) {
        this.selection = paragraphCount;
        this.paragraphs = [];

        for(let i = 0; i < paragraphCount; i++) {
            this.buildParagraph();
        }
    }
}
