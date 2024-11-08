$(document).ready(function(){
    /*------------------------------SERVICIOS--------------------------------------*/
    $(".video_vig").waypoint(
        function() {
            $(".video_vig").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".control_acceso").waypoint(
        function() {
            $(".control_acceso").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".iot_auto").waypoint(
        function() {
            $(".iot_auto").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".deteccion_inc").waypoint(
        function() {
            $(".deteccion_inc").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".cableado_estr").waypoint(
        function() {
            $(".cableado_estr").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".distr_audio").waypoint(
        function() {
            $(".distr_audio").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".titulo_clientes").waypoint(
        function() {
            $(".titulo_clientes").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    // Itera desde el vertical 1 hasta el vertical 3
    for (let i = 1; i <= 3; i++) {
        $(`.vertical${i}`).waypoint(
            function() {
                $(`.vertical${i}`).addClass("animate__animated animate__fadeInUp");
            },
            { offset: "80%" }
        );
    }

    /*------------------------------CLIENTES--------------------------------------*/
    // Itera desde el logo 1 hasta el logo 32
    for (let i = 1; i <= 32; i++) {
        $(`.logo${i}`).waypoint(
            function() {
                $(`.logo${i}`).addClass("animate__animated animate__fadeInUp");
            },
            { offset: "80%" }
        );
    }


    $(".titulo_proveedores").waypoint(
        function() {
            $(".titulo_proveedores").addClass("animate__animated animate__fadeInUp")
        }, 
        {offset: "80%"}
    );

    /*------------------------------FORMULARIO--------------------------------------*/
    $(".titulo_form").waypoint(
        function() {
            $(".titulo_form").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );

    $(".form1").waypoint(
        function() {
            $(".form1").addClass("animate__animated animate__fadeIn")
        }, 
        {offset: "80%"}
    );
})