// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

function youTubeEmbed(main) {
  const ytLinks = main.querySelectorAll('a[href*="youtube.com"');
  ytLinks.forEach((i) => {
    const url = i.href;
    const code = url.split('?v=')[1];
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${code}`;
    i.parentElement.append(iframe);
    i.parentElement.classList.add('youtube');
    i.remove();
  });
}

const main = document.querySelector('main');
youTubeEmbed(main);
