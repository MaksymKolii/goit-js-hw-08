import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const getSavedTime = localStorage.getItem('videoplayer-current-time');
console.log(getSavedTime);
// console.log(typeof(+currentSavedTime));

// const parsedCurrentSavedTime = JSON.parse(getSavedTime);

player.on('timeupdate',  throttle(checkedTime, 1000));

function checkedTime(data){
    localStorage.setItem(
      'videoplayer-current-time',
      `${data.seconds}`
    );
    console.log(data.seconds);
      console.log(typeof(data.seconds));
}

player.setCurrentTime(getSavedTime)

// player.setCurrentTime(getSavedTime).then(function(seconds) {
//   console.log("seconds -:?", seconds);
//   if(seconds>=562){
//     console.log('the time was less than 0 or greater than the video’s duration');
    
//   }
// }).catch(function(error) {
//   switch (error.name) {
//       case 'RangeError':
//           // the time was less than 0 or greater than the video’s duration
//           break;

//       default:
//           // some other error occurred
//           break;
//   }
// });


