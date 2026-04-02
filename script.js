
// let body = document.querySelector("body");
// let background = ["bg1", "bg2", "bg3"];
// index = 0;
// body.classList.add("bg1")
// let changeBg = () => {
//     body.classList.remove(background[index]);
//     index = (index + 1) % background.length;
//     body.classList.add(background[index])
// }

// setInterval(changeBg, 4000)

// window.addEventListener("keydown", (e) =>{
//     const key = document.querySelector(`.container-btn[data-key="${e.key.toUpperCase()}"]`);
//     const audio = document.querySelector(`audio[data-key="${e.key.toUpperCase()}"]`);
    

//     if (!audio) {
//         return;
//     }

//     audio.currentTime = 0;
//     audio.play();

//     key.classList.add("playing")
    
//     setTimeout(() => {
//         key.classList.remove("playing");
//     }, 100);
// })

// const buttons = document.querySelectorAll(".container-btn");

// buttons.forEach(btn => {
//     btn.addEventListener("touchstart", (e) => {
//         e.preventDefault;
//         const keyValue = btn.dataset.key;

//         const audio = document.querySelector(`audio[data-key="${keyValue}"]`);
//         if (!audio) return;

//         audio.currentTime = 0;
//         audio.play();

//         btn.classList.add("playing");
//     });
//     btn.addEventListener("transitionend", () => {
//         btn.classList.remove("playing");
//     });

// });



let body = document.querySelector("body");
const backgrounds = ["bg1", "bg2", "bg3"];
let bgIndex = 0;

// Initialize background
body.classList.add(backgrounds[bgIndex]);

// Change background every 4 seconds
const changeBg = () => {
    body.classList.remove(backgrounds[bgIndex]);
    bgIndex = (bgIndex + 1) % backgrounds.length;
    body.classList.add(backgrounds[bgIndex]);
};
setInterval(changeBg, 4000);

// DRY helper: play audio and animate button
const playKey = (keyValue) => {
    const keyBtn = document.querySelector(`.container-btn[data-key="${keyValue}"]`);
    const audio = document.querySelector(`audio[data-key="${keyValue}"]`);

    if (!audio || !keyBtn) return;

    audio.currentTime = 0;
    audio.play();

    keyBtn.classList.add("playing");

    keyBtn.addEventListener("transitionend", () => {
        keyBtn.classList.remove("playing");
    }, { once: true }); // remove listener after firing
};

// Keyboard input
window.addEventListener("keydown", (e) => {
    playKey(e.key.toUpperCase());
});

// Touch / click input
const buttons = document.querySelectorAll(".container-btn");
buttons.forEach(btn => {
    btn.addEventListener("touchstart", (e) => {
        e.preventDefault(); // fix missing parentheses
        playKey(btn.dataset.key);
    });
});