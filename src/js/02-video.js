import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeKey = "videoplayer-current-time";

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(currentTimeKey, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000) || 0);

const getCurrentTimeKey = localStorage.getItem(currentTimeKey);
 
player.setCurrentTime(JSON.parse(getCurrentTimeKey)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});