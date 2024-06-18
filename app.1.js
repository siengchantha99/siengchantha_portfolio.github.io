const app = Vue.createApp({
  //data, functions
  // template:'Hello'
  //create Function
  data() {
    return {
      showBooks: true,
      title: "Lesson Vue JS",
      author: "Chantha",
      age: "23",
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = false;
    },
  },
});
