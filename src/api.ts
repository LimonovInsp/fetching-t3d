const API_URL = "https://api.t3d.live/materials/lists";

export const fetchData = async () => {
  const response = await fetch(API_URL);

  return response.json();
}
