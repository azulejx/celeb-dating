
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var age = parseInt($(".age").val());
    var food = parseInt($(".food").val());
    var movie = parseInt($(".movie").val());
    var hobby = parseInt($(".hobby").val());
    var type = parseInt($(".type").val());
    var results = food + movie + hobby + type;
    //yoshi results
    if(results === 0 || results < 4){
      $("#yoshi").show();
    }
    //mulan results
    else if(results >= 4 && results < 8){
      $("#mulan").show();
    }
    //pikachu results
    else if(results >= 8 && results < 12){
      $("#pikachu").show();
    }
    //jonny bravo results
    else if(results >= 12 && results < 16){
      $("#jonnybravo").show();
    }
    //princess kida
    else if(results >= 16){
      $("#princesskida").show();
    }
    else{
      $("#error").show();
    }
  });

});
