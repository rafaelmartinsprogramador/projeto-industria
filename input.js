function onlyNumbers(event) {
    const key = event.key;
    // Verifica se a tecla pressionada é um número, ponto ou teclas de controle
    if (isNaN(key) && key !== '.' && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(key)) {
      event.preventDefault();
    }
  }