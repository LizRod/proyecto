$(document).on("pagecreate","#galeria",function(){
  $("p").on("swipe",function(){
  $("span").text("El precio es de: $2000 pesos.!");
});
});

$(document).on("pagecreate","#tur",function(){
  $("p").on("tap",function(){
  $("span").text("tap activado!");
});
});
