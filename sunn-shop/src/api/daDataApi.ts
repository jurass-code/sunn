const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "<token>";

export const daDataApi = {
  async getDataCity(value: string) {
    try {
      var query = {
        query: value,
        from_bound: { value: "city" },
        to_bound: { value: "settlement" },
      };
      var options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
        body: JSON.stringify(query),
      };
      //@ts-ignore
      const response = await fetch(url, options);
      const result = await response.text();
      const city = JSON.parse(result);
      return city.suggestions;
    } catch (e) {
      console.log(e);
      return [];
    }
  },
  async getDataAddress(value: string, fias_id: string) {
    try {
      var query = {
        query: value,
        from_bound: { value: "street" },
        to_bound: { value: "house" },
        locations: { fias_id: { fias_id } },
        restrict_value: true,
      };
      var options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
        body: JSON.stringify(query),
      };
      //@ts-ignore
      const response = await fetch(url, options);
      const result = await response.text();
      const city = JSON.parse(result);
      return city.suggestions;
    } catch (e) {
      console.log(e);
      return [];
    }
  },
};
