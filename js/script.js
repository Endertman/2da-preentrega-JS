var bicicletas = [
    {
      marca: "Trek",
      modelo: "X-Caliber 9",
      tipo: "MTB",
      precio: 1200.00,
      color: "Negro",
      año: 2022
    },
    {
      marca: "Giant",
      modelo: "Defy Advanced Pro",
      tipo: "Ruta",
      precio: 2500.00,
      color: "Rojo",
      año: 2021
    },
    {
      marca: "Specialized",
      modelo: "Sirrus X 4.0",
      tipo: "Urbana",
      precio: 700.00,
      color: "Azul",
      año: 2022
    },
    {
      marca: "Brompton",
      modelo: "M6L",
      tipo: "Plegable",
      precio: 1500.00,
      color: "Verde",
      año: 2021
    }
  ];
  
  var carrito = []; // Array para almacenar las bicicletas seleccionadas
  
  while (true) {
    // Saludo inicial y pregunta al usuario qué tipo de bicicleta desea comprar
    var mensajeSaludo = "¡Hola! ¿Qué tipo de bicicleta desea comprar?\nTipos disponibles: MTB, Ruta, Urbana, Plegable";
    var tipoDeseado = prompt(mensajeSaludo);
  
    // Filtrar bicicletas según el tipo deseado
    var bicicletasDisponibles = bicicletas.filter(function(bicicleta) {
      return bicicleta.tipo.toLowerCase() === tipoDeseado.toLowerCase();
    });
  
    // Mostrar bicicletas disponibles (si las hay)
    if (bicicletasDisponibles.length === 0) {
      alert("Lo siento, no hay bicicletas disponibles de tipo " + tipoDeseado);
      continue;
    } else {
      var mensajeBicicletas = "Bicicletas disponibles de tipo " + tipoDeseado + ":\n";
      bicicletasDisponibles.forEach(function(bicicleta, index) {
        mensajeBicicletas += (index + 1) + ". Marca: " + bicicleta.marca + ", Modelo: " + bicicleta.modelo + "\n";
      });
  
      mensajeBicicletas += (bicicletasDisponibles.length + 1) + ". Ver carrito\n";
      mensajeBicicletas += (bicicletasDisponibles.length + 2) + ". Pagar\n";
  
      var seleccion = parseInt(prompt(mensajeBicicletas));
  
      if (seleccion >= 1 && seleccion <= bicicletasDisponibles.length) {
        // El usuario eligió una bicicleta para agregar al carrito
        var bicicletaElegida = bicicletasDisponibles[seleccion - 1];
        alert("Ha agregado al carrito la bicicleta: Marca: " + bicicletaElegida.marca + ", Modelo: " + bicicletaElegida.modelo);
  
        // Agregar la bicicletaElegida al carrito
        carrito.push(bicicletaElegida);
  
        // Preguntar al usuario si desea seguir comprando o ver el carrito y pagar
        var continuarComprando = confirm("¿Desea seguir comprando?");
        if (!continuarComprando) {
          break; // Si no desea seguir comprando, salimos del bucle
        }
      } else if (seleccion === bicicletasDisponibles.length + 1) {
        // El usuario eligió ver el carrito
        if (carrito.length === 0) {
          alert("El carrito está vacío.");
        } else {
          var mensajeCarrito = "Bicicletas en el carrito:\n";
          carrito.forEach(function(bicicleta) {
            mensajeCarrito += "Marca: " + bicicleta.marca + ", Modelo: " + bicicleta.modelo + ", Precio: $" + bicicleta.precio.toFixed(2) + "\n";
          });
  
          mensajeCarrito += "Total de la compra: $" + carrito.reduce(function(total, bicicleta) {
            return total + bicicleta.precio;
          }, 0).toFixed(2);
  
          var opcionCarrito = parseInt(prompt(mensajeCarrito + "\n1. Comprar algo más\n2. Pagar"));
          if (opcionCarrito === 2) {
            // El usuario eligió pagar
            break;
          }
        }
      } else if (seleccion === bicicletasDisponibles.length + 2) {
        // El usuario eligió pagar directamente
        break;
      } else {
        alert("Opción no válida. No se ha agregado ninguna bicicleta al carrito.");
      }
    }
  }
  
  // Calcular el total de la compra
  var totalCompra = carrito.reduce(function(total, bicicleta) {
    return total + bicicleta.precio;
  }, 0);
  
  // Mostrar el carrito y el total de la compra
  var mensajeCarrito = "Bicicletas en el carrito:\n";
  carrito.forEach(function(bicicleta) {
    mensajeCarrito += "Marca: " + bicicleta.marca + ", Modelo: " + bicicleta.modelo + ", Precio: $" + bicicleta.precio.toFixed(2) + "\n";
  });
  mensajeCarrito += "Total de la compra: $" + totalCompra.toFixed(2);
  
  alert(mensajeCarrito);
  
  
