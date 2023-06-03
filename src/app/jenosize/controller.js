const axios = require('axios');

exports.searchPlace = async(req, res) => {
  try {
    const { restaurantName, provide } = req.body;
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${restaurantName}+${provide}&type=restaurant&key=${process.env.GOOGLE_API_KEY}`
    );
    return res.send({
      data: data,
    });
  } catch (err) {
    console.log("err: ", err);
  }
}