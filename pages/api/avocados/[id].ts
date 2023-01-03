import { NextApiRequest, NextApiResponse } from "next";

import DB from "../../../database/db";
const db = new DB();

const avocadoById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const avocado = await db.getById(id as string);
  res.status(200).json(avocado);
};

export default avocadoById;
