// Clase (modelo del Objeto)
class Camiseta {
  //Propiedades (caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  //metodos (funciones o acciones del objeto)
  constructor(color, modelo, marca, talla, number) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = this.precio;
  }
  
  public setColor(color) {
    this.color = color;
  }

  public getColor () {
    return this.color;
  }
}

var camiseta = new Camiseta("Rojo","Manga Larga", "Puma", "M", 150);
// camiseta.color = "rojo";
// camiseta.modelo = "Manga Larga";
// camiseta.marca = "Nike"
// camiseta.talla = "L";
// camiseta.precio = 10;
camiseta.setColor("Amarillo");

var playera = new Camiseta("Gris", "Manga Corta", "Pull and Bear","S", 200);
// playera.color = "azul";
// playera.modelo = "Manga Corta";
// playera.marca = "Adidas"
// playera.talla = "S";
// playera.precio = 100;
playera.setColor("Verde");

console.log(camiseta, playera);
 


