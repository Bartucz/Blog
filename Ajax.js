class Ajax {
    constructor() {}
  
    getAjax(fajlnev, myCallback) {
      const posts = [];
      $.ajax({
        url: fajlnev,
        type: "GET",
        success: function (result) {
          result.forEach((element) => {
            posts.push(element);
          });
          myCallback(posts);
        },
      });
    }
  
    postAjax(fajlnev, adat) {
      console.log(adat);
      $.ajax({
        url: fajlnev,
        type: "POST",
        data: adat,
        success: function (result) {}
      });
    }
  
    putAjax(fajlnev, adat, id) {
      $.ajax({
        url: fajlnev + "/" + id,
        type: "PUT",
        data: adat,
        success: function (result) {}
      });
    }
  
    deleteAjax(fajlnev, id) {
      $.ajax({
        url: fajlnev + "/" + id,
        type: "DELETE",
        success: function (result) {}
      });
    }
  }