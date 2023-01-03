import { IncomingMessage, ServerResponse } from "http";

import DB from "@database";
const db = new DB();

const allAvocados = async (req: IncomingMessage, res: ServerResponse) => {
  const avocados = await db.getAll();

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ length: avocados.length, data: avocados }));
};

export default allAvocados;
