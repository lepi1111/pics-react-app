import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID pnbG7-a4klxq33s2CJEqCBysgf8XVN9BOXxLnNBsfYs",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
