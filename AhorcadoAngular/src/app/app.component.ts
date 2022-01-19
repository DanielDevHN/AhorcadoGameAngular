import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  

  palabra = 'HONDURAS';
  palabraOculta = '';
  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



  constructor(){

    this.palabraOculta = '_ '.repeat( this.palabra.length);
  }
  comprobar(letra: any ) {
    this.siExisteLetra(letra);
    
    let palabraOcultaArray = this.palabraOculta.split(' ');
    
    for (let i = 0; i < this.palabra.length; i++){

      if (this.palabra[i] === letra){

        palabraOcultaArray[i] = letra;
      }
    }

    this.palabraOculta = palabraOcultaArray.join(' ');
    this.verificarGanador();
  }

  verificarGanador(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluada = palabraArr.join('');

    if (palabraEvaluada === this.palabra){
      this.gano = true;
      console.log('El usuario GANO');
    } 
    
    if (this.intentos >= 9){
      this.perdio = true;
      console.log('El usuario PERDIO');
    }

  }


  siExisteLetra (letra: any) {

    if (this.palabra.indexOf(letra)>=0 ){
    }else{
      this.intentos ++;
    }
  }
}
