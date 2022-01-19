$(function () {
    const ajax = new Ajax();
    const eleresiUt = "http://localhost:5500/posts";
    const eleresiUt2 = "http://localhost:5500/posts";
  
    ajax.getAjax(eleresiUt, adatKiiras);
  
    const szuloElem = $("#post");
    const sablonElem = $(".postSablon");
    szuloElem.empty();
    sablonElem.show();
  
    function adatKiiras(posts) {
        posts.forEach(function (adat) {
        let ujElem = sablonElem.clone().appendTo(szuloElem);
        const post = new Task(ujElem, adat);
      });
      sablonElem.hide();
    }
    $("#ujPost").on("click", function () {
      ajax.postAjax(eleresiUt2,$("form").serialize());
    });

    $(window).on("deleteKattintas", (event) => {
      console.log(event.detail.id);
      ajax.deleteAjax(eleresiUt2,event.detail.id);
      ajax.getAjax(eleresiUt, adatKiiras);
    });
  });