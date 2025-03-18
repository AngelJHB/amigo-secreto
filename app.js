// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    // Verificar si el input tiene un valor
    if (input.value.trim() !== '') {
      // Crear un elemento <li> con el nombre del amigo
      const li = document.createElement('li');
      li.textContent = input.value;
      // Agregar el elemento <li> a la lista
      listaAmigos.appendChild(li);
      // Reiniciar el input para que el usuario pueda ingresar otro nombre
      input.value = '';
    } else {
      alert('Por favor, ingresa un nombre para agregar a la lista.');
    }
  }


  function sortearAmigo() {
    // Obtenemos la lista de amigos mediante el ID de la etiqueta
    const listaAmigos = document.getElementById('listaAmigos');
    // Verificamos si la lista de amigos tiene al menos un elemento
    if (listaAmigos.children.length > 0) {
      // Obtenemos todos los elementos <li> de la lista de amigos
      const amigos = Array.from(listaAmigos.children);
      // Seleccionamos un elemento aleatorio de la lista de amigos
      const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
      // Obtenemos el texto del elemento seleccionado (que es el nombre del amigo)
      const nombreAmigo = amigoSorteado.textContent.trim();
      // Obtenemos la lista de resultados mediante el ID de la etiqueta
      const listaResultado = document.getElementById('resultado');
      // Creamos un elemento <li> con el nombre del amigo sorteado
      const elementoResultado = document.createElement('li');
      elementoResultado.textContent = `El amigo sorteado es: ${nombreAmigo}`;
      // Agregamos el elemento a la lista de resultados
      listaResultado.appendChild(elementoResultado);
    } else {
      // Si la lista de amigos está vacía, mostramos un mensaje
      alert('No hay amigos en la lista');
    }
  }

