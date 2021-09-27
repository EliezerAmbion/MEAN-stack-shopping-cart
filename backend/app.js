const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    // {
    //   id: "7",
    //   title: "lorem this ipsum 7",
    //   content: "lorem content id 7",
    // },
    // {
    //   id: "8",
    //   title: "lorem this ipsum 8",
    //   content: "lorem content is 8",
    // },

    {
      id: 1,
      title: "Product 1",
      description: "This is the product 1 description",
      price: 100,
    },
    {
      id: 1,
      title: "Product 2",
      description: "This is the product 2 description",
      price: 200,
    },
  ];

  res.status(200).json({
    message: "Fetched successfully",
    posts: posts,
  });
});

module.exports = app;
