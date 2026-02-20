
//Archivo de conexion a la abase de datos,y se exporta el pool de conexiones para poder usarlo en otros archivos

import { createPool } from "mysql2/promise";
import dotenv from "dotenv";


//configuramos o inicializamos dotenv para poder usar las variables de entorno que tenemos en el archivo .env
dotenv.config();

const pool = createPool({
  host: process.env.DB_HOST, //localhost
  user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //12345678
    database: process.env.DB_NAME, //testdb
    waitForConnections: true,
    connectionLimit: 10,
});


export default pool;