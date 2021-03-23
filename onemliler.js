/* eslint-disable */ 

/*
let essek = new Promise((resolve, reject) => {
    console.log("denioz bakalm")
    resolve("asdfa")
})

essek.then(text => {
    console.log(text)
    let donb = "selam"
    return donb
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



addEventListener("scroll", () => {
  var d = new Date();
  var n = d.getMilliseconds();
  console.log(n);
  // maybe push to array
})

var l = [329, 343, 359, 376, 392, 409, 426, 444, 459, 476, 492, 508, 525, 542, 560, 575, 592]
var b = 0;
var z = 0;
l.forEach(element => {
  z = element - b;
  b = element;
  console.log(z);
});

/* Linux Mozilla Laptop Milliseconds between scrolls
14 debugger eval code:7:11
16 debugger eval code:7:11
17 debugger eval code:7:11
16 debugger eval code:7:11
17 debugger eval code:7:11
17 debugger eval code:7:11
18 debugger eval code:7:11
15 debugger eval code:7:11
17 debugger eval code:7:11
16 debugger eval code:7:11
16 debugger eval code:7:11
17 debugger eval code:7:11
17 debugger eval code:7:11
18 debugger eval code:7:11
15 debugger eval code:7:11
17 */
