import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!'); // con esto ya se optiene nuestra primera API, la cual se puede consumir desde el navegador o desde herramientas como Postman o Insomnia
});

app.listen(PORT, () => {
  console.log("Aplicacion de express corriendo en el puerto " + PORT);
});