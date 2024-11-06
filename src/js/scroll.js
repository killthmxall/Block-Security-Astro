$(document).ready(function(){
    $(".contenedor").waypoint(
        function() {
            $(".contenedor").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".titulo_servicio").waypoint(
        function() {
            $(".titulo_servicio").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

})