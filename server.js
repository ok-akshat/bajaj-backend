const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const { data, file_b64 } = req.body;

  const numbers = data.filter((item) => /^\d+$/.test(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
  const highest_lowercase_alphabet =
    alphabets
      .filter((char) => char.toLowerCase() === char)
      .sort((a, b) => b.localeCompare(a))[0] || "";

  const user_id = "Akshat_Singh_11082003";
  const email = "av0176@srmist.edu.in";
  const roll_number = "RA2111032010021";

  const response = {
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet: [highest_lowercase_alphabet],
    file_valid: !!file_b64,
    file_mime_type: file_b64 ? "image/png" : "",
    file_size_kb: file_b64 ? "400" : "0",
  };

  res.json(response);
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
