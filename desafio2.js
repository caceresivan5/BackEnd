
const fs = require('fs');

class File {
  constructor() {
    this.filePath = "products.txt";
  }
  async read() {
    try {
      const file = await fs.promises.readFile(this.filePath, "utf-8");
      return JSON.parse(file);
    } catch (err) {
      return [];
    }
  }
  async save(title, price, thumbnail) {
    try {
      const products = await this.read();
      const newProduct = {
        id: products.length + 1,
        title,
        price,
        thumbnail,
      };
      products.push(newProduct);
      await fs.promises.writeFile(
        this.filePath,
        JSON.stringify(products, null, 2)
      );
      return `AGREGADO ${title} A LA LISTA DE PRODUCTOS`;
    } catch (err) {
      console.log("ALGO SALIO MAL", err);
    }
  }
  async delete() {
    await fs.promises.unlink(this.filePath);
    console.log('ELIMINADO')
  }
}
const main = async () => {
  const fileHandler = new File();
  console.log("Read: ", await fileHandler.read());
  console.log(
    await fileHandler.save(
      "PlayStation 1 ",
      60000,
     "https://static.turbosquid.com/Preview/2017/09/24__12_23_05/CONTEXTIMAGE.jpg0187D165-443E-441A-8E39-C55006D589A3Large.jpg"
      )
  );
  console.log(
    await fileHandler.save(
      "PlayStation 4",
      70000,
      "https://m.media-amazon.com/images/I/6118ctEjpoL._AC_SL1500_.jpg"
    )
  );
  console.log(
    await fileHandler.save(
      "PlayStation 5",
      90000,
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ps5-playstaton-5-2-1600255876.jpg"
    )
  );
  console.log("Read: ", await fileHandler.read());
   setTimeout(async () => {
    await fileHandler.delete();
    console.log("Read: ", await fileHandler.read());
  }, 3000)
};
main();