import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Exchange-rate");
});

app.post("/exchange-rate", (req, res) => {
  const currency1 = req.body?.currency1;
  const currency2 = req.body?.currency2;

  // Check Currency status
  if (currency1 === "USD" && currency2 === "NGN") {
    res.status(200).send({ rate: 410.56 });
  } else if (currency1 === "NGN" && currency2 === "USD") {
    res.status(200).send({ rate: 0.0024 });
  } else {
    res.status(404).send({ error: "Error in fetching exchange rate" });
  }
});

// app.listen(8000);
app.listen(8000, () => console.log(`Server is listening at port 8000`));
