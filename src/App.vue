<template>
  <div id="app">
    <i class="fa fa-star"></i>
    <input
      type="text"
      v-model="query"
      placeholder="cerca"
      @keyup.enter="search"
    />
    <h1>film</h1>
    <div v-for="movie in movies" :key="movie.id">
      <img :src="imgUrl + imgSize + movie.poster_path" alt="" />

      <ul>
        <li>{{ movie.title }}</li>
        <li>{{ movie.original_title }}</li>
        <li>{{ movie.original_language }}</li>
        <li>{{ movie.vote_average }}</li>
      </ul>
      <div></div>
      <img :src="flags[movie.original_language]" alt="" />
    </div>
    <h1>serie tv</h1>
    <div v-for="serie in series" :key="serie.id">
      <img :src="imgUrl + imgSize + serie.poster_path" alt="" />
      <ul>
        <li>{{ serie.name }}</li>
        <li>{{ serie.original_name }}</li>
        <li>{{ serie.original_language }}</li>
        <li>{{ serie.vote_average }}</li>
      </ul>
      <img :src="flags[serie.original_language]" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      apiKey: "ef9dd0c6f45121e37042289e7f1f1189",
      apiUrl: "https://api.themoviedb.org/3",
      movies: [],
      series: [],
      query: "",
      flags: {
        en: require("svg-country-flags/png100px/gb.png"),
        it: require("svg-country-flags/png100px/it.png"),
        de: require("svg-country-flags/png100px/de.png"),
        //en: require("svg-country-flags/png100px/gb.png"),
      },
      imgUrl: "https://image.tmdb.org/t/p/",
      imgSize: "w342",
    };
  },
  methods: {
    searchQuery(tipo, query, dataKey) {
      axios
        .get(this.apiUrl + tipo, {
          params: {
            api_key: this.apiKey,
            query: query,
            language: "it",
          },
        })
        .then((resp) => {
          this[dataKey] = resp.data.results;
        });
    },
    search() {
      this.searchQuery("/search/movie", this.query, "movies");
      this.searchQuery("/search/tv", this.query, "series");
      console.log("ciao");
    },
    getImg() {},
  },
  computed: {
    vote() {
      return Math.round(this.movies.vote_average / 2);
    },
  },

  /*  mounted() {
    //Tutte le chiamate devono avere "apiKey"
    //Search deve avere anche "query"
    axios
      .get(this.apiUrl + "/search/movie", {
        params: {
          api_key: this.apiKey,
          query: "ciao",
        },
      })
      .then((resp) => {
        this.movie = resp.data;
      });
  }, */
};
//~
</script>

<style lang="scss">
@import "~@fortawesome/fontawesome-free/css/all.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
