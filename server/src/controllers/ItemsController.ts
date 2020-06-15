import { Request, Response } from "express";
import connection from "../database/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await connection("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        //alterado para url do expo para mobile
        image_url: `http://192.168.15.15:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems); 
  }
}

export default ItemsController;
