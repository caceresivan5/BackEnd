
class Usuario {
    constructor() {
      this.nombre = "Ivan";
      this.apellido = "Caceres";
      this.libros = [{ titulo: "Odisea", autor: "Homero" }];
      this.mascotas = ["Perro", "Gato", "Pez"];
    }
    getFullName() {
      return `El nombre del usuario es ${this.nombre + " " + this.apellido}`;
    }
    addMascota(mascota) {
      this.mascotas.push(mascota);
      return this.mascotas;
    }
    countMascotas() {
      return this.mascotas.length;
    }
    addBook(titulo, autor) {
      this.libros.push({ titulo, autor });
    }
    getBooks() {
      return this.libros.map((libro) => ` Titulo : ${libro.titulo} , Auto: ${libro.autor}`);
    }
  }
  
  const res = new Usuario();
  
  res.addMascota("Tortuga");
  res.addBook("Inferno" , "Dan Brown");
  
  console.log(res.getFullName());
  console.log(res.addMascota())
  console.log(res.countMascotas());
  console.log(res.getBooks());