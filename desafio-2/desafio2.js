
const fs = require('fs');

class File {
  constructor() {
    this.archivoPath = "products.txt";
  }
  
  async read() {
    try {
      const archivo = await fs.promises.readFile(this.archivoPath, "utf-8");
      return JSON.parse(archivo);
    } catch (err) {
      return [];
    }
  }
  
  async save(title, price, thumbnail) {
    try {
      const productos = await this.read();
      const newProducto = {
        id: productos.length + 1,
        title,
        price,
        thumbnail,
      };
      productos.push(newProducto);
      await fs.promises.writeFile(
        this.archivoPath,
        JSON.stringify(productos, null, 2)
      );
      return `AGREGADO ${title} A LA LISTA DE PRODUCTOS`;
    } catch (err) {
      console.log("ALGO SALIO MAL", err);
    }
  }
  
  async delete() {
    await fs.promises.unlink(this.archivoPath);
    console.log('ELIMINADO')
  }
}
const main = async () => {
  const fileHandler = new File();
  console.log("Read: ", await fileHandler.read());
  console.log(
    await fileHandler.save(
      "PlayStation 1 ",
      65000,
     "https://static.turbosquid.com/Preview/2017/09/24__12_23_05/CONTEXTIMAGE.jpg0187D165-443E-441A-8E39-C55006D589A3Large.jpg"
      )
  );
  console.log(
    await fileHandler.save(
      "PlayStation 2",
      70000,
      "https://resizer.glanacion.com/resizer/XwzL5-JRa4QFUHBWRSqrSojmlC4=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5SQ4LH7YX5GG3JAOXFNBWWMMAQ.jpg"
    )
  );
  console.log(
    await fileHandler.save(
      "PlayStation 3",
      70000,
      "https://m.media-amazon.com/images/I/91UX9xN6xbL._SL1500_.jpg"
    )
  );
 
  console.log("Read: ", await fileHandler.read());
   setTimeout(async () => {
    await fileHandler.delete();
    console.log("Read: ", await fileHandler.read());
  }, 3000)
};
main();