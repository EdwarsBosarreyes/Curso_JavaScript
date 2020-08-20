// Clase (modelo del Objeto)
var Camiseta = /** @class */ (function () {
    //metodos (funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = this.precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("Rojo", "Manga Larga", "Puma", "M", 150);
// camiseta.color = "rojo";
// camiseta.modelo = "Manga Larga";
// camiseta.marca = "Nike"
// camiseta.talla = "L";
// camiseta.precio = 10;
camiseta.setColor("Amarillo");
var playera = new Camiseta("Gris", "Manga Corta", "Pull and Bear", "S", 200);
// playera.color = "azul";
// playera.modelo = "Manga Corta";
// playera.marca = "Adidas"
// playera.talla = "S";
// playera.precio = 100;
playera.setColor("Verde");
console.log(camiseta, playera);
