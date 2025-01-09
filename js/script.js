$(document).ready(function() {
    $("#white").click(function () {
        $("body").removeClass();
        $("body").addClass("white");
    });

    $("#Black").click(function () {
        $("body").removeClass();
        $("body").addClass("Black");
        $("#white").addClass("white-text");
    });

    $("script").click(function () {
        $("body").removeClass();
        $("body").addClass("Black");
        $("#white").addClass("white-text");
    });

    $(".definition1, .definition2, .definition3, .definition4, .definition5, .definition6, .definition7, .definition8, .definition9").hide();


    $(".question1").click(function() {
        $(".definition1").slideToggle();
        $(".definition2, .definition3, .definition4, .definition5, .definition6, .definition7, .definition8, .definition9").hide();
    });

    $(".question2").click(function() {
        $(".definition2").slideToggle();
        $(".definition1, .definition3, .definition4, .definition5, .definition6, .definition7, .definition8, .definition9").hide();
    });

    $(".question3").click(function() {
        $(".definition3").slideToggle();
        $(".definition1, .definition2, .definition4, .definition5, .definition6, .definition7, .definition8, .definition9").hide();
    });

    $(".question4").click(function() {
        $(".definition4").slideToggle();
        $(".definition1, .definition2, .definition3, .definition5, .definition6, .definition7, .definition8, .definition9").hide();
    });

    $(".question5").click(function() {
        $(".definition5").slideToggle();
        $(".definition1, .definition2, .definition3, .definition4, .definition6, .definition7, .definition8, .definition9").hide();
    });

    $(".question6").click(function() {
        $(".definition6").slideToggle();
        $(".definition1, .definition2, .definition3, .definition4, .definition5, .definition7, .definition8, .definition9").hide();
    });

    $(".question7").click(function() {
        $(".definition7").slideToggle();
        $(".definition1, .definition2, .definition3, .definition4, .definition5, .definition6, .definition8, .definition9").hide();
    });

    $(".question8").click(function() {
        $(".definition8").slideToggle();
        $(".definition1, .definition2, .definition3, .definition4, .definition5, .definition6, .definition7, .definition9").hide();
    });

    $(".question9").click(function() {
        $(".definition9").slideToggle();
        $(".definition1, .definition2, .definition3, .definition4, .definition5, .definition6, .definition7, .definition8").hide();
    });

   

    

    
    // $('#ipt').click(function () {
    //     $('.script').hide();



    //     $('.script').fadeToggle("high");
    //     $('.high').slideUp("script");
    // });



    // $('#boxes').click(function () {
    //     $('.script').slideUp("")
    //     $(".script").showClass("")
    //     $('.high').hideClass("")
    //     $(".script").hideClass("")
    //     $('.high').showClass("")
    // });

    
      
    //   $('.cat').click(function () {
    //     $('.animal2').fadeToggle()
    //     $('.animal1').fadeOut()
    //   });

    // $('.femi').click(function () {
    //     $('#p1').slideToggle()
    //     $('#p2').slideUp()
    //   });
      
   
});
