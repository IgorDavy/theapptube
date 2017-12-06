import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YtProvider } from './../../providers/yt/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videos: Observable<any[]>;
  radius: number;
  coords: any;

  constructor(public navCtrl: NavController, private ytProvider: YtProvider, private youtube: YoutubeVideoPlayer) {
    this.radius = 100;
    this.coords = {latitude: -21, longitude: 55};
    this.getVideos();
  }

  getVideos() {
    this.ytProvider.search(this.coords.latitude, this.coords.longitude, this.radius).then((res) => {
      this.videos = res.videos;
    })
  }

  openVideo(video) {
    this.youtube.openVideo(video.videoId);
  }
};
