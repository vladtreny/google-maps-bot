/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const randomInteger = async (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const humanScroll = async (page) => {
  const PIXELPERWHEEL = 100;

  const scroller = (pixel) => {
    page.evaluate(() => {
      window.scrollBy(0, pixel);
    });
  };

  const firstSlowScrolls = () => {
    const firstScrolls = [1, 5, 7];
    let i = 0;
    let total = 0;
    setInterval(() => {
      scroller(firstScrolls[i]);
      i += 1;
      total += firstScrolls[i];
      if (i === firstScrolls.length - 1) {
        clearInterval();
      }
    }, 10);
    return total;
  };
  const lastSlowScrolls = () => {
    let totalScrolled;
    for (let i = 4; i === 0; i -= 1) {
      scroller(i);
      totalScrolled += i;
    }
    return totalScrolled;
  };

  const oneWheelSmoothScrolls = [1, 5, 7, 11, 13, 14, 14, 13, 10, 7, 4, 1];

  const oneWheelScroller = () => {
    page.evaluate(
      () => {
        let i = 0;
        setInterval(() => {
          document.documentElement.scrollBy(0, oneWheelSmoothScrolls[i]);
          i += 1;
          if (i === (oneWheelSmoothScrolls.length - 1)) {
            clearInterval();
          }
        }, 10);
      },
    );
  };

  const actions = {
    scroll: async (wheelCount) => {
      if (wheelCount === 1) {
        oneWheelScroller();
        return;
      }
      const totalPixel = wheelCount * PIXELPERWHEEL;
      const middleIncreament = wheelCount * wheelCount;
      await page.evaluate(
        () => {
          const firstScrollCount = firstSlowScrolls();
          const midScrollCount = new Promise((resolve, reject) => {
            let totalMidScrolls;
            setInterval(() => {
            }, 10);
          });

          for (let i = 0; i < array.length; i += 1) {
            const element = array[i];
          }
        },
      );
    },
    randomScroll: () => {

    },
  };
};

/*

await page.evaluate(
    () =>
      new Promise((resolve) => {
        var scrollTop = -1;
        const interval = setInterval(() => {
          window.scrollBy(0, pixel);
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            return;
          }
          clearInterval(interval);
          resolve();
        }, 10);
      })
  );

1 index.html:61:21
4 index.html:61:21
6 index.html:61:21
10 index.html:61:21
13 index.html:61:21
17 index.html:61:21
21 index.html:61:21
25 index.html:61:21
29 index.html:61:21
33 index.html:61:21
37 index.html:61:21
41 index.html:61:21
44 index.html:61:21
47 index.html:61:21
50 index.html:61:21
52 index.html:61:21
54 index.html:61:21
55 index.html:61:21
56 index.html:61:21
57 index.html:61:21

2 debugger eval code:2:21
5 debugger eval code:2:21
13 debugger eval code:2:21
31 debugger eval code:2:21
59 debugger eval code:2:21
99 debugger eval code:2:21
144 debugger eval code:2:21
192 debugger eval code:2:21
237 debugger eval code:2:21
282 debugger eval code:2:21
321 debugger eval code:2:21
358 debugger eval code:2:21
388 debugger eval code:2:21
416 debugger eval code:2:21
437 debugger eval code:2:21
450 debugger eval code:2:21
456 debugger eval code:2:21
*/
