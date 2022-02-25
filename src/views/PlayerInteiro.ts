import { html } from '~/utils';
import './PlayerInteiro.css';
import { Tocar } from './TocarMusica';
export function PlayerInteiro() {
  return (
    html`<div class="album1"> 
            <div class="titulo">
              <img src='../img/beethoven.png' class="foto"></img>
              <div class="descricao">
                <h2 class="nome1">Symphony Collection</h2>
                <i class="nome2">Ludwig van Beethoven</i>
              </div>
            </div>
            <div class="musicas">
              <p> 01. Symphony no. 1 in C, Op. 21 - I. Adagio molto - Allegro con brio </li>
              <p> 02. Symphony No. 3 in E Flat Major Eroica, Op. 55 - II. Marcia funebre Adagio assai </li>
              <p> 03. Symphony no. 4 in Bb, Op. 60 - IV. Allegro ma non troppo </li>
            </div>
          </div>

          <div class="album2">
            <div class="titulo">
              <img src='../img/chopin.png' class="foto"></img>
              <div class="descricao">
                <h2 class="nome1">Preludes Collection</h2>
                <i class="nome2">Frédéric Chopin</i>
              </div>
            </div>
            <div class="musicas">
              <p> 01. Preludes, Op. 28 - Nos. 4 ,5, 6 </li>
              <p> 02. Preludes, Op. 28 - Nos. 20, 21 </li>
              <p> 03. Preludes, Op. 28 - No. 15 </li>
            </div>
        </div>
        <div class="player">
          <img src='../img/prev.svg' class="seta anterior" }>
          <img src='../img/play.svg' class="botaoplay" id="a">
          <img src='../img/pause.svg' class="botaopause" id="b">
          <img src='../img/next.svg' class="seta proximo">
        </div>
        <audio controls="controls" src='https://www.netmundi.org/home/wp-content/uploads/2017/08/beethoven_moonlight_sonata.mp3'></audio>
        <script>${Tocar()}</script>
    `);
}
