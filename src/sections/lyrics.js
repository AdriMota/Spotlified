import { getSongLyrics } from '../api.js'

const lyricsSection = document.querySelector('#lyrics')
const lyricsSectionSongTitle = lyricsSection.querySelector('h1')
const lyricsSectionArtistName = lyricsSection.querySelector('h2')
const lyricsSectionLyrics = lyricsSection.querySelector('p')

async function renderLyricsSection(idSong) {
    const song = await getSongLyrics(idSong)
    console.log(song)
    lyricsSectionSongTitle.innerText = song.title
    lyricsSectionArtistName.innerText = song.artist.name
    lyricsSectionLyrics.innerHTML = song.lyrics
}

export default renderLyricsSection