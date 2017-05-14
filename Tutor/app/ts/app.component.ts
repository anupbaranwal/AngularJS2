import {Component} from 'angular2/core';
import {Constants} from './constants';
import {PlaylistComponent} from './playlist.component';
import {Video} from './modal.videos';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
    heading = Constants.WEBSITE_HEADING;
    videos:Array<Video>;

    constructor() {
        this.videos = [new Video("1", "Getting Started with Spring cloud", "Microservices. What does it mean in practice? The answer, like so many Facebook status updates, is complicated. In broad strokes, microservices offer a refreshed approach to application architecture. Microservices are a new way to describe many of the patterns that have fallen out of large-scale applications in practice over recent years", "cCEvFDhe3os"),
                    new Video("2", "Building Microservices with Spring Cloud", "Spring Cloud 1.0 is here! It offers a powerful way to create and consume microservices. As you introduce new services, you introduce integration problems: services can be shaky, they can disappear and - as they're often exposed over HTTP - they require a bit more footwork than in-process method invocations", "ZyK5QrKCbwM")];
    }
}
