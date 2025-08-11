import express, { type Request, type Response } from "express";

const app = express();
const PORT = process.env.PORT || 4001;

app.get("/", (req: Request, res: Response) => {
  return res.send(`<h1>HI hello how are you? dockesdsrasd</h1>`);
});

app.listen(PORT, (error) => {
  console.log(`Server Serving on http://localhost:${PORT}`);
});
