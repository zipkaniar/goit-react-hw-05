import axios from "axios";
const themoviedbBaseURL = "https://api.themoviedb.org/3";
const axiosInstance = axios.create({
  baseURL: themoviedbBaseURL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTkwYjY0NWM0MThlNDkzMGExYTJlNGNiNmNhNTJiOSIsIm5iZiI6MTczNTE1NTI2OS45MTEsInN1YiI6IjY3NmM1ZTQ1ZTQ0YjFjNDkwNDg4MzYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nSNLPJu-n0-s6O5KYkLFY3-ag7LDHSDg_R_Y3ZJOuKc",
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
