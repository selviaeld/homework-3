import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../Redux/Store";

import CreatePlaylist from "../CreatePlaylist";

test("Components render correctly", () => {
  render(
    <Provider store={store}>
      <CreatePlaylist />
    </Provider>
  );

  const inputSearch = screen.getByRole("textbox");

  expect(inputSearch).toBeInTheDocument();
});

const getTrackData = async (query, Token) => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`;
    if (query !== "") {
      const data = await fetch(url, {
        headers: {
          Authorization: "Bearer " + Token.access_token
        }
      }).then(res => res.json());
      return data.tracks.items[0].name;
    }
  };
  
  global.fetch = jest.fn(
    () =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            tracks: { items: { 0: { name: "into the night" } } }
          })
      }),
    Promise.reject(console.log("rejected"))
  );
  
  test("Mocking search API call", async () => {
    const Token = {
      access_token:
        "BQD2uKXLdLLqI630CVcQ6NXFfT9bVvimvG7rL5JWJY-NgXGuXb…1LiMl0Q6EjTZlao_hRmpzPlpWcSrMkwZ19NCsAw3RT6O0A7pQ",
      token_type: "Bearer",
      expires_in: "3600"
    };
    const data = getTrackData("yoasobi", Token);
    expect(data).toBeDefined();
    expect(fetch).toHaveBeenCalledTimes(1);
});
