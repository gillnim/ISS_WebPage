const random = Math.floor(Math.random() * 10) + 1;

class nasaApi {
  constructor() {
    this.apiKey = "HYxWOndZgKlSzBNXFe35xa4aoKgdC4EUOHVsZ4Rt";
    this.nasaUrl = "https://api.nasa.gov/";
    this.imagesUrl = "https://images-api.nasa.gov/";
  }

  search = async (query) => {
    try {
      const response = await axios.get(
        `${this.imagesUrl}/search?q=${query}&media_type=image&page_size=20&page=${random}`
      );

      const imageLinks = response.data.collection.items.map(
        (data) => data.links[0].href
      );

      const repeated = [].concat(...new Array(10).fill(imageLinks));

      return repeated;
    } catch (error) {
      console.log(error);
    }
  };

  getApod = async () => {
    try {
      const response = await axios.get(
        `${this.nasaUrl}planetary/apod?api_key=${this.apiKey}`
      );
      return response.data.hdurl;
    } catch (error) {
      console.log(error);
    }
  };
}

const api = new nasaApi();

export default api;
