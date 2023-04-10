import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = "videoplayer-current-time";

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(CURRENT_TIME_KEY, seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

const getCurrentTimeKey = localStorage.getItem(CURRENT_TIME_KEY);
 
player.setCurrentTime(JSON.parse(getCurrentTimeKey) || 0);