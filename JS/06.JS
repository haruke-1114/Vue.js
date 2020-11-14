let data = {
  input: {
    type: "01",
    title: "",
  },
  menu: [
    { type: "01", title: "011", link: "javascript:;" },
    { type: "01", title: "012", link: "javascript:;" },
    { type: "02", title: "021", link: "javascript:;" },
    { type: "02", title: "022", link: "javascript:;" },
    { type: "02", title: "023", link: "javascript:;" },
    { type: "03", title: "031", link: "javascript:;" },
    { type: "03", title: "032", link: "javascript:;" },
    { type: "03", title: "033", link: "javascript:;" },
    { type: "03", title: "034", link: "javascript:;" },
    { type: "04", title: "041", link: "javascript:;" },
    { type: "05", title: "051", link: "javascript:;" },
    { type: "06", title: "061", link: "javascript:;" },
  ],
};

let vm = new Vue({
  el: "#app",
  data: data,
  methods: {
    inputHandler() {
      if (this.input.title) {
        let { type, title } = this.input
        this.menu.push({
          // type: this.input.type,
          // title:this.input.title,
          type,
          title,
          link: "javascript:;"
        })
        this.input.title = ""
      }
    },
  },
});
