const button = document.getElementById('myCosmos');

    button.addEventListener('click', () => {
      const popup = window.open('', 'Popup', 'width=700,height=438');
      popup.document.write('<img src="./IMG/belkastrelka.jpeg" alt="Изображение">');
      popup.focus();
    });