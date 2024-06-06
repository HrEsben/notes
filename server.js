const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("src")); // Serve static files from 'public' directory

app.get("/api/notes", (req, res) => {
  // Your logic to fetch notes from Supabase
  res.send("Fetching notes from Supabase...");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
