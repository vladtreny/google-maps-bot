/* eslint-disable */ 

/*
let essek = new Promise((resolve, reject) => {
    console.log("denioz bakam")
    resolve("adamim")
})

essek.then(text => {
    console.log(text)
    let donbakam = "salamlarr"
    return donbakam
})
.then(text => {
    console.log(text)
    return 0
})
*/
/*
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var ornekstring = "Bugun hava cok guzel"
var arrayhali = ornekstring.split("")

let randomsayi = getRndInteger(0, arrayhali.length - 1)

console.log(arrayhali[randomsayi])
*/
/*
let bum = 'selam' + 'ben ' + 'ahali'
console.log(bum)

let cum = 3.16

console.log(parseInt(cum))

addEventListener("scroll", () => {
  console.log(document.documentElement.scrollTop);
})

addEventListener("wheel", () => {
  console.log("kaydirdin");
})

*/
// const viewport = {
//       width: "1280",
//       height: "720", // Your settings...
//     }
//     const launchOptions = {
//       ignoreHTTPSErrors: true,
//       defaultViewport: viewport,
//       args: [
//         `--no-sandbox`,
//         `--disable-setuid-sandbox`,
//         `--no-first-run`,
//         `--disable-sync`,
//         `--ignore-certificate-errors`,
//         `--lang=en-US,en;q=0.9`,
//         `--window-size=${viewport.width},${viewport.height}`,
//       ],
//     }

const deneme = (sanirim) => {
  const act = {
    zalim: (sanirim) => {
      console.log(sanirim);
    },
  };

  return act;
};

const bumbe = deneme('abijim');

bumbe.zalim();
