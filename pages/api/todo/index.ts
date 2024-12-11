import { DELETE, GET, PATCH, POST } from "@/src/Todo/api/api.server";
import { NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    switch (req.method?.toUpperCase()) {
      case "GET":
        return await GET(req, res);
      case "POST":
        return await POST(req, res);
      case "PATCH":
        return await PATCH(req, res);
      case "DELETE":
        return await DELETE(req, res);
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(500).json({ message: error.issues });
    }

    res.status(500).json({ message: "error" });
  }
}
