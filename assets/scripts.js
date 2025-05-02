// Curtain open logic
const curtainLeft = document.getElementById('curtainLeft');
const curtainRight = document.getElementById('curtainRight');
curtainLeft.addEventListener('animationend', () => curtainLeft.style.display = 'none');
curtainRight.addEventListener('animationend', () => curtainRight.style.display = 'none');

// Magical Music with Tone.js
let musicPlaying = false;
const musicButton = document.getElementById('musicToggle');
let backgroundSynth, backgroundSeq; 

async function setupMusic() {
  await Tone.start();
  backgroundSynth = new Tone.FMSynth({harmonicity:3.1,modulationIndex:10}).toDestination();
  const reverb = new Tone.Reverb(2).toDestination();
  backgroundSynth.connect(reverb);
  const melody = [null,'B4',null,'E5','G5',null,'F#5'];
  backgroundSeq = new Tone.Sequence((time,note)=>{if(note)backgroundSynth.triggerAttackRelease(note,'8n',time);},melody,'4n');
  Tone.Transport.bpm.value=100; backgroundSeq.loop=true;
}

musicButton.addEventListener('click',async()=>{
  if(!backgroundSynth) await setupMusic();
  if(!musicPlaying){Tone.Transport.start();musicButton.textContent='Stop Music 🤫';musicPlaying=true;} else {backgroundSeq.stop();Tone.Transport.stop();musicButton.textContent='Play Magical Music 🎵';musicPlaying=false;}
});
