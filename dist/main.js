import express, {} from "express";
const app = express();
const PORT = process.env.PORT || 4001;
app.get("/", (req, res) => {
    return res.send(`<h1>HI hello how are you? docker</h1>`);
});
app.listen(PORT, (error) => {
    console.log(`Server Serving on http://localhost:${PORT}`);
});
//# sourceMappingURL=main.js.map