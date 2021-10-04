// $("a").attr("href","https://www.amazon.com");        change attributes
// $("h1").css("color","red");                          change css
// $("button").text("Don't Click me");                  change only text
// $("a").html("<em>Google</em>");                      change whole html
// $("h1").addClass("big-heading");                     add class
// $("h1").addClass("big-heading margin-50");           add multiple class
// $("h1").removeClass("big-heading");                  remove class
// $("h1").toggle("big-heading");                       toggle class by add/remove

/*
$("h1").click(function(){
    $("h1").css("color","yellow");
});
*/

/*
for(var i=0;i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color = "purple";
    });
}

$("button").click(function(){
    $("h1").css("color","purple");
});
*/

/*
$("input").keypress(function(event){
    $("h1").text(event.key);
})
*/

/*
$("h1").on("mouseover",function(){
    $("h1").css("color","green");
});
*/

/*
$("h1").before("<button>New</button>");        //add html before tag
$("h1").after("<button>New</button>");         //add html after tag
$("h1").prepend("<button>New</button>");       //add html before content but inside tag
$("h1").append("<button>New</button>");        //add html after content but inside tag
$("button").remove();                          //remove all elements
*/

/*
$("button").on("click",function(){
    $("h1").hide();
});

$("button").on("click",function(){
    $("h1").show();
});

$("button").on("click",function(){
    //$("h1").toggle();
});
*/

/*
$("button").on("click",function(){
    //$("h1").fadeOut();
    //$("h1").fadeIn();
    //$("h1").fadeToggle();
});
*/

/*
$("button").on("click",function(){
    // $("h1").slideUp();
    // $("h1").slideDown();
    $("h1").slideToggle();
});
*/

/*
$("button").on("click",function(){
    //we can't add string values like color,etc. in animate css
    //only numerical values

    // $("h1").animate({opacity: 0.5});
    // $("h1").animate({margin : "20%"});
    // $("h1").animate({fontSize:200});
    
    //We can add multiple animation
    // $("h1").slideUp().slideDown().animate({fontSize:"3.5rem"});
});
*/

    
    














