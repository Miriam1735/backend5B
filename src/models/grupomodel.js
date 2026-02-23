import db from '../config/DB.js';

export const getAllGrupos = async () => {
  // Solo lógica de DB
  const [rows] = await db.query('SELECT * FROM grupos');
  return rows;
};

export const createGrupo = async ({ nombre_grupo }) => {
  const [result] = await db.query(
    'INSERT INTO grupos (nombre_grupo) VALUES (?)',
    [nombre_grupo]
  );
  return { id: result.insertId, nombre_grupo };
};