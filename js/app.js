var MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px";

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
        MenuItens.style.maxHeight = "200px";

    }else{
        MenuItens.style.maxHeight = "0px";
    }
}

var produtoImg = document.getElementById("produtoImg");
var produtoMinuatura = document.getElementsByClassName("produtoMinuatura");

produtoMinuatura[0].onclick = function(){
    produtoImg.src = produtoMinuatura[0].src;
}

produtoMinuatura[1].onclick = function(){
    produtoImg.src = produtoMinuatura[1].src;
}

produtoMinuatura[2].onclick = function(){
    produtoImg.src = produtoMinuatura[2].src;
}

produtoMinuatura[3].onclick = function(){
    produtoImg.src = produtoMinuatura[3].src;
}

