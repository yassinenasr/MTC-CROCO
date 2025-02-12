// import app.js file
const app = require("./backend/app");
// mettre notre serveur express à l'écoute
app.listen(3000, () => {
    console.log("Server is listening on PORT 3000 ...");
});