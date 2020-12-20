let data = {
    title:"發大財",
    index:0,
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
      type: null,
      title: null,
    },
  };
  
  let vm = new Vue({
    el: "#app",
    data: data,
    // computed: {
    //   typeList() {
    //     let obj = {
    //       sort: [],
    //       map: {},
    //     };
    //     this.menu.forEach((item, index) => {
    //       let { type, title, link } = item;
  
    //       if (!obj.map[type]) {
    //         obj.sort.push(type);
    //         obj.map[type] = {
    //           sort: [],
    //           map: {},
    //         };
    //       }
    //       obj.map[type].sort.push(title);
    //       obj.map[type].map[title] = { index, link };
    //     });
    //     return obj;
    //   },
    //   titleList() {
    //     this.input.title = null;
    //     if (this.input.type) {
    //       return this.typeList.map[this.input.type];
    //     } else {
    //       return [];
    //     }
    //   },
    //   content() {
    //     if (this.input.title) {
    //       return this.titleList.map[this.input.title];
    //     } else {
    //       return null;
    //     }
    //   }
    // },
  });
  