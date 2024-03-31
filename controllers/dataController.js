const axios = require("axios");

exports.getData = async (req, res) => {
  try {
    const { category, limit } = req.query;
    const apiUrl = `https://api.publicapis.org/entries?${
      category ? `category=${category}&` : ""
    }${limit ? `title=${limit}&` : ""}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("An error occurred while fetching data");
  }
};
