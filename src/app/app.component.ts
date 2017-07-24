import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    selection: number = 5;
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
        "Hit the rum slow, parole kids, live Rapunzel.",
        "Scrub your toungue, man. Stick the toothbrush down your throat if you have to b.",
        "Ain't gonna front, that Proactiv work.",
        "Wash your face first, then your nuts. You going backwards.",
        "The best soap from the heavens above. That's Dove.",
        "Lot of y'all don't know how to get busy.",
        "Make sure you match.",
        "Every rapper wanna be a rapper.",
        "You gotta have a chain.",
        "Those stones ain't real son.",
        "Changing the forecast with that shit.",
        "Do it big, man.",
        "Stay out the back of The Source.",
        "Word up, man.",
        "How you gonna let your man come out with that white shit around his mouth?",
        "Tell son to get that booger out his nose.",
        "Going to the Floyd fight with greens on his teeth.",
        "You got it my dude.",
        "Set me free. On some Martin Luther King shit, man.",
        "We continually stay bobbing and weaving.",
        "We got gum on the back of our sneakers.",
        "Every litte piece of gum you see of the sidewalk, those black spots, we been around since them days.",
        "Watch what you say around certain individuals b.",
        "A man is a man. That's what first.",
        "Don't let nothing scare you.",
        "Staten Island. Stapelton. We come from a place where we fight.",
        "What goes around comes around. This the science of karma.",
        "For every action there's a reaction. So watch what you do out there.",
        "Be nice to the crackheads.",
        "To each his own.",
        "You never know what's lingering over you.",
        "We can handle this like gentlemen, or we can get on some gangster shit.",
        "You gotta have a Plan B. You can't just have Plan A, and when that shit don't work just bug out.",
        "Keychains, that's another hustle. Sell Icees in the summertime.",
        "You selling drugs in a school zone? Run.",
        "Ugly ones, green ones, I love all y'all.",
        "You can shit in my house, just light some matches. You want some matches babe?",
        "This and that and the third.",
        "The same thing that can make you laugh can make you cry.",
        "Make sure you pick your fruits real well.",
        "Just be careful. Take it from your boy.",
        "Just watch who you give all that energy to.",
        "Hold your head.",
        "Turkey and cheese, nice little Nutriment.",
        "I still eat ramen noodles, the chicken kind.",
        "This is Toneology right here.",
        "Fuck your astrology. This is Toneology.",
        "It all stems from the table.",
        "The family broke up from not eating at the table.",
        "A lack of communication leads to a lack of understanding.",
        "Let's get spiritual. Let's get the school shit.",
        "You don't kiss the babies, man.",
        "It's gonna get big. It's gonna be a main event.",
        "Not the babies, man.",
        "Yeah, we slayed Mother Earth. We took the jewelries from her.",
        "I respect your man Al Gore for this greenhouse effect b.",
        "We used catch bees and put them in the jars g.",
        "You think you know so much, but you so stupid at the same time.",
        "The earth is going through a crisis right now.",
        "Life and death is like peanut butter and jelly.",
        "Who's to say that death is bad?",
        "Knowledge is power. And if you got that, you can probably get the most dollars.",
        "That brown liquor will get you son.",
        "I'm not used to somebody taking from me. I do the taking around here.",
        "We love y'all.",
        "Stop with all that pork. Lay off the swine.",
    ]

    ngOnInit() {
        this.buildParagraphs(5);
    }

    buildParagraph() {
        let paragraph_length = 0;
        let paragraph_content = '';

        if (this.isMobileDevice()) {
            paragraph_length = 250;
        } else {
            paragraph_length = 500;
        }

        while(paragraph_content.length < paragraph_length) {
            paragraph_content += _.sample(this.quotes) + ' ';
        }
        this.paragraphs.push(paragraph_content);
    }

    buildParagraphs(paragraphCount: number) {
        this.selection = paragraphCount;
        this.paragraphs = [];

        for(let i = 0; i < paragraphCount; i++) {
            this.buildParagraph();
        }
    }

    isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
}
