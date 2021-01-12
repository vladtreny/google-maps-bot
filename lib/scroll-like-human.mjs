/* eslint-disable import/prefer-default-export */

import { Bezier } from 'bezier-js';

const randomInteger = async (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const humanScroll = async (page) => {
  const PIXELPERWHEEL = 100;

  const scroller = async (pixel) => {
    // eslint-disable-next-line no-shadow
    await page.evaluate((pixel) => {
      window.scrollBy(0, pixel);
    }, pixel);
  };

  const firstSlowScrolls = async () => {
    const firstScrolls = [1, 5, 7];
    let i = 0;
    let total = 0;
    setInterval(() => {
      scroller(firstScrolls[i]);
      total += firstScrolls[i];
      i += 1;
      if (i === firstScrolls.length - 1) {
        clearInterval();
      }
    }, 100);

    return total;
  };

  const decideScrollLength = (wheelCount) => {
    const minLength = 3 * wheelCount + 7;

    const scrollLength = randomInteger(minLength, minLength + 2); // 3n+7
    return scrollLength;
  };

  const fixFirstThreeScrolls = (lut) => {
    const coords = lut;

    const firstThreeScrolls = [1, 5, 7];

    const middleOfArray = Math.floor(lut.length / 2);

    coords[middleOfArray - 2].x -= firstThreeScrolls[0];
    coords[middleOfArray].x -= firstThreeScrolls[1];
    coords[middleOfArray + 2].x -= firstThreeScrolls[2];

    return coords;
  };

  const midScrolls = async (wheelCount) => {
    const endScroll = PIXELPERWHEEL * wheelCount;

    const curve = await new Bezier(0, 0, 0, endScroll, endScroll, 0, endScroll, endScroll);
    const scrollLength = await decideScrollLength(wheelCount);
    const lut = await curve.getLUT(scrollLength);

    const fixedLut = fixFirstThreeScrolls(lut);

    let i = 3;
    let total = 0;
    let scrollPixel = 0;
    setInterval(() => {
      scrollPixel = Math.floor(fixedLut[i + 1]) - Math.floor(fixedLut[i]);

      scroller(scrollPixel);

      total += scrollPixel;

      if (i === scrollLength - 2) {
        clearInterval();
      }

      i += 1;
    }, 10);
    return total;
  };

  const oneWheelScroller = async () => {
    await page.evaluate(
      () => {
        const oneWheelSmoothScrolls = [1, 5, 7, 11, 13, 14, 14, 13, 10, 7, 4, 1];
        let i = 0;
        setInterval(() => {
          window.scrollBy(0, oneWheelSmoothScrolls[i]);
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
        await oneWheelScroller();
        return;
      }

      const firstScrollCount = firstSlowScrolls();
      console.log(firstScrollCount);
      const middleScrollCount = await midScrolls(wheelCount);

      if (firstScrollCount + middleScrollCount !== wheelCount * PIXELPERWHEEL) {
        const totalScroll = firstScrollCount + middleScrollCount;
        // eslint-disable-next-line prefer-template
        throw new Error('Total scroll count not match to proper value. Something went wrong. Total scroll count: ' + totalScroll);
      }
    },
  };
  return actions;
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
