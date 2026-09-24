export const LOGO =
  "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAdEhm1UzVexHjKqFOP9W6E2UVtkWFvL-vdxIEbTU81rsqNuPmDDy_dQvmQ85ath49JBruVV4aGQA3gY2Dl5SiqFf-AEwPAZBTNkW8FMxGXpDN2mHrf8KlRRiddj1P422ZW1eZkZNWLTd.svg";
export const NETFLIX_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4263c437-c678-4724-ad80-e3ba0dc8761e/web/IN-en-20260921-TRIFECTA-perspective_95810136-2c4a-4ab4-a323-50418521e261_large.jpg";

export const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTYwMTQ2ZGM2M2ZlZDg5ZGFhYThkM2ViZTlkYzdlMyIsIm5iZiI6MTc5MDIzOTUyNy4zMzQsInN1YiI6IjZhYjRlMzI3YjczZDlmZWFhODA0NTVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3q9rk5uzZMkji74THKJT9_LDiHM42X7GnHCi9Bt8R0";

export const API_KEY = "2a60146dc63fed89daaa8d3ebe9dc7e3";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
};
