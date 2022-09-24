import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//Не знаю как надо Но добавил, чтоб не затягивалась localStorage из 3 го задания
//localStorage.removeItem('feedback-form-state');

const VIDEOCURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const getSavedTime = Number(localStorage.getItem(VIDEOCURRENT_TIME));

player.on('timeupdate', throttle(updatedTime, 1000));

function updatedTime({ seconds }) {
  const currentTime = Math.round(seconds);
  localStorage.setItem(VIDEOCURRENT_TIME,currentTime);
}

if(getSavedTime){
  player.setCurrentTime(getSavedTime);
}
