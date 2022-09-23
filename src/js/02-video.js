import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const getSavedTime = localStorage.getItem('videoplayer-current-time');
console.log(getSavedTime);

player.on('timeupdate',  throttle(updatedTime, 1000));


function updatedTime({seconds}){
  const currentTime = Math.round(seconds)
    localStorage.setItem(
      'videoplayer-current-time',
      currentTime
    );
}

player.setCurrentTime(getSavedTime)




