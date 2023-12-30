import { ApiUrl } from "./ApiUrl"

export const CardComponentsFunction = ({setData, category}) => {
  const url = `${ApiUrl?.songList}?filter={"mood":"${category}"}`
    async function fetchData() {
      try {
        const response = await fetch(url,
          {
            method: "GET",
            headers: {
              projectId: "knjxpr9vh9wr",
            },
          }
        );
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
}

export const TrendingSongsFunction = ({setData}) => {
  async function fetchData() {
    try {
      const response = await fetch(
        ApiUrl.songList,
        {
          method: "GET",
          headers: {
            projectId: "knjxpr9vh9wr",
          },
        }
      );
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}

export const SuggestionPageFunction = ({setData, query}) => {
  async function fetchData() {
    try {
      const response = await fetch(
        `${ApiUrl.songList}?search={"title":"${query}"}`,
        {
          method: "GET",
          headers: {
            projectId: "edlpgt620a4c",
          },
        }
      );
      const json = await response.json();
      // console.log(json.data);
      setData(json.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  if (query.trim() !== "") {
    fetchData();
  }
}

export const AlbumDetailsPageFunction = ({setData, myParam}) => {
  async function fetchData() {
    try {
      const response = await fetch(
        `${ApiUrl.albumList}${myParam}`,
        {
          method: "GET",
          headers: {
            projectId: "knjxpr9vh9wr",
          },
        }
      );
      const json = await response.json();
      console.log(json);
      let romanticSongs = json.data.songs.filter(
        (item) => item.mood === "romantic"
      );
      setData(romanticSongs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}

export const PodCastsFunction = ({setData, mood}) => {
  async function fetchData() {
    try {
      let url = `${ApiUrl.songList}?filter={"mood":"${mood}"}`;
      const getData = await fetch(url, {
        method: "GET",
        headers: {
          projectID: "edlpgt620a4c",
        },
      });
      const json = await getData.json();
      console.log(json.data);
      setData(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}

export async function SignInFunction({email, password}) {
  try {
    let item = {
      email: email,
      password: password,
      appType: "music",
    };
    const Header = {
      "Content-Type": "application/json",
      projectID: "edlpgt620a4c",
    };
    let getData = await fetch(ApiUrl.signIn, {
        method: "POST",
        headers: Header,
        body: JSON.stringify(item),
      }
    );
    let response = await getData.json();
     return response;
  }
  catch (error) {
    throw error;
  }
}

export async function SignUpFunction({name, email, password}) {
  try {
    let item = {
      name: name,
      email: email,
      password: password,
      appType: "music",
    };
    const Header = {
      "Content-Type": "application/json",
      projectId: "edlpgt620a4c",
    };
    let getData = await fetch(
      ApiUrl.signUp,
      {
        method: "POST",
        headers: Header,
        body: JSON.stringify(item),
      }
    );
    let response = await getData.json();
    return response;
  } catch (error) {
    throw error;
  }
}