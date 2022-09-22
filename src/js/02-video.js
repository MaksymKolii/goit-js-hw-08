import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

player.on('timeupdate', throttle(function (data) {


  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(`${data.seconds}`)
  );
  console.log(data.seconds);
}), 1000);

// function checkedTime(data){
//     localStorage.setItem(
//         'videoplayer-current-time',
//         JSON.stringify(`${data.seconds}`)
//       );
// }

// player.on('timeupdate', timeStop);

// function timeStop(timeupdate) {
//     let pause = timeupdate.seconds;
//     console.log(pause);
//     localStorage.setItem("videoplayer-current-time", pause)
// }

let currentSavedTime = localStorage.getItem('videoplayer-current-time');
const parsedCurrentSavedTime = JSON.parse(currentSavedTime);
 //console.log(typeof(+parsedCurrentSavedTime));

player
  .setCurrentTime(+parsedCurrentSavedTime)
  .then(function (seconds) {
    
console.log('the actual time that the player seeked to', seconds);

  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

/*timeupdate
Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser. 
{
    duration: 61.857
    percent: 0.049
    seconds: 3.034
}
*/

/* setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>
Set the current playback position in seconds. Once playback has started, if the player was paused, it will remain paused. Likewise, 
if the player was playing, it will resume playing once the video has buffered. Setting the current time before playback has started 
will cause playback to start.

You can provide an accurate time and the player will attempt to seek to as close to that time as possible. The exact time will be the
 fulfilled value of the promise. 

 */
