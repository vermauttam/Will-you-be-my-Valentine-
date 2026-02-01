// window.addEventListener('load', function() {
//     const audio = document.createElement('audio');
//     audio.src = '/mnt/data/b6651920-4dd5-4553-a215-a19b294851ac.mp3';
//     audio.autoplay = true;
//     audio.loop = true; // optional loop
//     document.body.appendChild(audio);
// });


window.addEventListener('load', function() {
    const audio = document.createElement('audio');
    audio.src = 'audio/bubu_ataaatta.mp3'; // path to your uploaded mp3
    audio.autoplay = true;
    audio.loop = true; // loop the music
    audio.volume = 0.5; // optional: set volume to 50%
    document.body.appendChild(audio);
});
