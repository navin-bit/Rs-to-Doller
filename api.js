const express = require("express");

const app = express();
//create simple service like Rs to Doller
app
  .get("/api/rs-to-doller/:rs", (req, res) => {
    let rs = Number(req.params.rs);

    const conversion_rate = 0.012;

    let doller = conversion_rate * rs;

    return res.json({ doller: doller });
  })
  .listen(5566);
