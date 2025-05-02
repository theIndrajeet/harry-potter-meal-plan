// Curtain open logic & Tone.js music toggle
const curtainLeft = document.getElementById('curtainLeft');
const curtainRight = document.getElementById('curtainRight');
const btn = document.getElementById('musicToggle');

curtainLeft.addEventListener('animationend', () => curtainLeft.style.display = 'none');
curtainRight.addEventListener('animationend', () => curtainRight.style.display = 'none');

btn.addEventListener('click', () => alert('Magical music toggled!'));
