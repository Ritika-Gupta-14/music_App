let songId = 1;

let play = Array.from(document.querySelectorAll(".p-pause"));
let audio = document.getElementById("audio");
let pl = document.getElementById("pl");
let banner = document.getElementById("banner");
let songItem = Array.from(document.querySelectorAll(".songItem"));
let fwd = document.getElementById("for");
let back = document.getElementById("back");
const song = [
  {
    name: "Jeene Laga Hoon",
    filep: "song/1.mp3",
    coverp: "covers/1.jpg",
    duration: "3:51",
  },
  {
    name: " Muskurane ",
    filep: "song/2.mp3",
    coverp: "covers/2.jpg",
    duration: "5:34",
  },
  {
    name: " Hai Apna Dil Toh Awara ",
    filep: "song/3.mp3",
    coverp: "covers/3.jpg",
    duration: "3:20",
  },
  {
    name: " Heer",
    filep: "song/4.mp3",
    coverp: "covers/4.jpg",
    duration: "5:15",
  },
  {
    name: "Matargashti",
    filep: "song/5.mp3",
    coverp: "covers/5.jpg",
    duration: "5:28",
  },
  {
    name: "Moh Moh Ke Dhaage ",
    filep: "song/6.mp3",
    coverp: "covers/6.jpg",
    duration: "5:22",
  },
  {
    name: "Dheere Dheere Se Meri Zindagi Mein Aana ",
    filep: "song/7.mp3",
    coverp: "covers/7.jpg",
    duration: "5:28",
  },
  {
    name: " Chaar Kadam ",
    filep: "song/8.mp3",
    coverp: "covers/8.jpg",
    duration: "4:02",
  },
  {
    name: " Soch Na Sake",
    filep: "song/9.mp3",
    coverp: "covers/9.jpg",
    duration: "4:41",
  },
  {
    name: "  Main Rang Sharbaton Ka",
    filep: "song/10.mp3",
    coverp: "covers/10.jpg",
    duration: "4:23",
  },
];

audio.addEventListener("timeupdate", () => {
  let x = parseFloat((audio.currentTime / audio.duration) * 100);

  document.getElementById("progressBar").value = x;
});
document.getElementById("progressBar").addEventListener("change", () => {
  audio.currentTime =parseFloat(document.getElementById("progressBar").value * audio.duration) / 100;
});
function stopall() {
  play.forEach((el, i) => {
    audio.src = `song/${i + 1}.mp3`;
    audio.pause();
    play[i].classList.remove("fa-circle-pause");
    play[i].classList.add("fa-circle-play");

    songItem[i].style.color = "black";
    songItem[i].style.background = "white";
  });
  pl.classList.remove("fa-circle-pause");
  pl.classList.add("fa-circle-play");
  banner.style.animation = "none";
}

songItem.forEach((el, i) => {
  el.querySelectorAll(".timestamp")[0].innerText = song[i].duration;
  el.querySelectorAll(".nameSon")[0].innerText = song[i].name;
  el.getElementsByTagName("img")[0].src = `covers/${i + 1}.jpg`;
});

play.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    let x = parseInt(e.target.id);
    console.log(audio.src);
    songId = x;
    if (audio.paused || audio.currentTime == 0) {
      stopall();

      audio.src = `song/${x}.mp3`;
      audio.play();
      afterplay();
    } else {
      stopall();
    }
  });
});

pl.addEventListener("click", () => {
  if (audio.paused || audio.currentTime == 0) {
    audio.play();
    afterplay();
  } else {
    audio.pause();

    play[songId - 1].classList.remove("fa-circle-pause");
    play[songId - 1].classList.add("fa-circle-play");
    console.log(play[songId - 1].classList);
    songItem[songId - 1].style.color = "black";
    songItem[songId - 1].style.background = "white";
    pl.classList.remove("fa-circle-pause");
    pl.classList.add("fa-circle-play");
    banner.style.animation = "none";
  }
});
back.addEventListener("click", () => {
  if (songId == 1) {
    songId = 10;
  } else {
    songId -= 1;
  }
  stopall();
  audio.src = `song/${songId}.mp3`;
  audio.play();
  afterplay();
});

fwd.addEventListener("click", () => {
  if (songId == 10) {
    songId = 1;
  } else {
    songId += 1;
  }
  stopall();
  audio.src = `song/${songId}.mp3`;
  audio.play();
  afterplay();
});
function afterplay() {
  play[songId - 1].classList.remove("fa-circle-play");
  play[songId - 1].classList.add("fa-circle-pause");
  banner.src = `covers/${songId}.jpg`;
  banner.style.animation = "photorotate 10s infinite ease-in-out";
  banner.style.display = "inline";
  songItem[songId - 1].style.color = "white";
  songItem[songId - 1].style.background = "black";
  pl.classList.remove("fa-circle-play");
  pl.classList.add("fa-circle-pause");
}
