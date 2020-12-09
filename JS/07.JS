let data = {
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
  input: {
    type: "all",
    title: "",
  },
};

let vm = new Vue({
  el: "#app",
  data: data,
  computed: {
    typeMenu() {
      if (this.input.type != "all") {
        return this.menu.filter(item => {
          return item.type == this.input.type;
        });
      } else {
          return this.menu
        };
      },
      titleMenu() {
          if (this.input.title) {
            return this.typeMenu.filter(item=>{
              let content = item.title.toLowerCase(); 
              let keyword = this.input.title.toLowerCase(); 
              return content.indexOf(keyword) !=-1
            })
          }else {
            return this.typeMenu 
          }
        },
    }
});
