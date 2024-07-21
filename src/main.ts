import "./style.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import Reveal from 'reveal.js';

const deck = new Reveal({
    history: true,
    width: 2560,
    height: 1440,
});
deck.initialize();
