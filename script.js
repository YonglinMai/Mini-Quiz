var red = document.createElement("IMG");
    red.setAttribute("src","http://n.7k7kimg.cn/2017/0208/1486545663756.jpg");
var snow = document.createElement("IMG");
    snow.setAttribute("src","http://hbimg.b0.upaiyun.com/1da06da2b205b6ebbc5e0758b109bbe947e0b89431eff-OOg2HF_fw658");
var cind = document.createElement("IMG");
    cind.setAttribute("src","http://img02.tooopen.com/products/20150424/tooopen_55774924.jpg");
var sleep = document.createElement("IMG");
    sleep.setAttribute("src","http://sudasuta.com/wp-content/uploads/2013/04/DDAAB80154FB4C0CDABE58FF7763CD8E_500_698.jpg");
var no = document.createElement("IMG");
    no.setAttribute("src","http://pic.peepic.com/uploads_pic/20170918/194884/194884_001.jpg");
$("button").click(function(){
    var height = $(".height").val();
    var country = $(".country").val();
    if(height < 5.5 && country === "England"){
        $(".answer").text("You are Little Red Riding Hood!");
        $(".princess").html(red);
    }else if(height < 5.5 && country === "France"){
        $(".answer").text("You are Snow White!");
        $(".princess").html(snow);
    }else if(height > 5.5 && country === "England"){
        $(".answer").text("You are Cinderella!");
        $(".princess").html(cind);
    }else if (height > 5.5 && country === "France"){
        $(".answer").text("You are Sleeping Beauty!");
        $(".princess").html(sleep);
    }else{
        $(".answer").text("try Again!");
        $(".princess").html(no);
    } 
});