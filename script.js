console.log('Welcome to Khanak~');
let songindex = 0;
let audioElement = new Audio('./Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let Progressbar = document.getElementById('Progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Songs = [
  {
    songName: 'Oceans (Where Feet May Fail)',
    filepath: './Songs/1.mp3',
    coverPath: 'cover1.jpeg',
  },
  {
    songName: 'soleil soleil',
    filepath: './Songs/2.mp3',
    coverPath: 'cover2.jpg',
  },
  {
    songName: 'The Dichotomy of Fame',
    filepath: './Songs/3.mp3',
    coverPath: 'cover3.jpg',
  },
  {
    songName: 'Summertime Sadness',
    filepath: './Songs/4.mp3',
    coverPath: 'cover4.jpeg',
  },
  {
    songName: 'Cardigan',
    filepath: './Songs/5.mp3',
    coverPath: 'cover5.jpg',
  },
  {
    songName: 'Somewhere Only We Know',
    filepath: './Songs/6.mp3',
    coverPath: 'cover6.jpeg',
  },
  {
    songName: 'Those Eyes',
    filepath: './Songs/7.mp3',
    coverPath: 'cover7.jpeg',
  },
  {
    songName: 'End of Beginning',
    filepath: './Songs/8.mp3',
    coverPath: 'cover8.png',
  },
  {
    songName: 'Daylight',
    filepath: './Songs/9.m4a',
    coverPath: 'cover9.jpeg',
  },
  {
    songName: 'Rewrite The Stars',
    filepath: './Songs/10.mp3',
    coverPath: 'cover10.jpeg',
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = Songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = Songs[i].songName;
});

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
  // console.log('timeupdate');
  Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(Progress);
  Progressbar.value = Progress;
});

Progressbar.addEventListener('change', () => {
  audioElement.currentTime = (Progressbar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    element => {
      element.classList.add('fa-circle-play');
      element.classList.remove('fa-circle-pause');
    }
  );
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
  element.addEventListener('click', e => {
    if (e.target.classList.contains('fa-circle-play')) {
      makeAllPlays();
      songindex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `./Songs/${songindex + 1}.mp3`;
      masterSongName.innerText = Songs[songindex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
    } else {
      e.target.classList.remove('fa-circle-pause');
      e.target.classList.add('fa-circle-play');
      audioElement.currentTime = 1;
      audioElement.pause();
      gif.style.opacity = 0;
      masterPlay.classList.add('fa-circle-play');
      masterPlay.classList.remove('fa-circle-pause');
    }
  });
});

document.getElementById('next').addEventListener('click', () => {
  if (songindex >= 9) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioElement.src = `./Songs/${songindex + 1}.mp3`;
  masterSongName.innerText = Songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.add('fa-circle-play');
  masterPlay.classList.remove('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  audioElement.src = `./Songs/${songindex + 1}.mp3`;
  masterSongName.innerText = Songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.add('fa-circle-play');
  masterPlay.classList.remove('fa-circle-pause');
});
