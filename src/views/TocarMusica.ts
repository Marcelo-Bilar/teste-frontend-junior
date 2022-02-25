
export function Tocar() {
    let musicas = [
        'https://www.netmundi.org/home/wp-content/uploads/2017/08/beethoven_moonlight_sonata.mp3',
        'https://www.netmundi.org/home/wp-content/uploads/2017/08/beethoven_fur_elise-para-elise.mp3',
        'https://www.netmundi.org/home/wp-content/uploads/2017/08/03-01-Symphony-No.-5-in-C-minor-Op.-67-1.-Allegro-Con-Brio.mp3',
        'https://www.netmundi.org/home/wp-content/uploads/2017/08/1-Nocturne-in-E-flat-major-Op.-9-No.-2.mp3',
        'https://www.netmundi.org/home/wp-content/uploads/2017/08/10-Minute-Waltz.mp3',
        'https://www.netmundi.org/home/wp-content/uploads/2017/08/5-Grande-valse-brillante-in-E-flat-major.mp3'
      ]
      let indexMusica = 0;
      let musicaescolhida = musicas[indexMusica];
      let musica = new Audio(musicaescolhida);
      console.log(musica); // ver se a audio esta chegando

      if(document.getElementById("a") as HTMLImageElement){
          addEventListener("click", tocarMusica); // maior problema
        } 
      if(document.getElementById("b") as HTMLImageElement){
        addEventListener("click", pausarMusica);
      }
      var c = (document.querySelector('.anterior') as HTMLImageElement)
      if(c){
        addEventListener('click', () => {
          indexMusica--;
          if (indexMusica < 0) {
              indexMusica = 5;
          }
          renderizarMusica();
        });
      }
    
      var d = (document.querySelector('.proxima') as HTMLImageElement)
      if(d){
        addEventListener('click', () => {
          indexMusica++;
          if (indexMusica > 5){
              indexMusica = 0;
          }
          renderizarMusica();
        });
      }
    
      function renderizarMusica(): void{
        musica.setAttribute('src', musicaescolhida);
      }
    
      // Funções
    
      function tocarMusica(): void{
        musica.play();
        (document.querySelector('.botaopause')as HTMLImageElement).style.display = 'block';
        (document.querySelector('.botaoplay') as HTMLImageElement).style.display = 'none';
    }
    
      function pausarMusica(): void{
          musica.pause();
          (document.querySelector('.botaopause') as HTMLImageElement).style.display = 'none';
          (document.querySelector('.botaoplay') as HTMLImageElement).style.display = 'block';
      }
}