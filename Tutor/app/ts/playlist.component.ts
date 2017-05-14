import {Component} from 'angular2/core';

@Component({
    selector: 'my-playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent {
    toggleVideo:boolean = false;
    url: string;
    showVideo(videoUrl) {
        this.toggleVideo = !this.toggleVideo;
        this.url = "https://www.youtube.com/embed/" + videoUrl;
    }
}