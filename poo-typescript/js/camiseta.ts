// Interface
interface CamisetaBase {
  setColor(color);
  getColor();
}

//Decorador
function estampar(logo: string){
  return function(target: Function){
    target.prototype.estampacion = function(): void{
      console.log("Camiseta Estampada con el logo de :" + logo);
    }
  }
}

// Clase (modelo del Objeto)
@estampar('Puma')
/*export*/ class Camiseta implements CamisetaBase {
  //Propiedades (caracteristicas del objeto)
  private color: string;
  private modelo: string;
  private marca: string;
  private talla: string;
  private precio: number;

  // metodos (funciones o acciones del objeto)
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

//Clase hija
class Sudadera extends Camiseta {
  public capucha: boolean;
  
  setCapucha(capucha: boolean) {
    this.capucha = capucha;
  }

  getCapucha():boolean {
    return this.capucha;
  }
}

var camiseta = new Camiseta("fdas", "fads", "fadas", "fasas", 12);
console.log(camiseta);

var sudadera_nike = new Sudadera("Rojo", "Manga Larga", "Nike", "L", 150);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Celeste");
console.log(sudadera_nike);
