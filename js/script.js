$('#form_pedido').submit(function (e) {
    if ($.trim($("#idnombre").val()) === "") {
        $("#lnombre").css("color", "red");
        e.preventDefault();
    }
    else {
        $("#lnombre").css("color", "black");
    }

    if ($.trim($("#idapellidos").val()) === "") {
        $("#lapellidos").css("color", "red");
        e.preventDefault();
    }
    else {
        $("#lapellidos").css("color", "black");
    }
});

$("#idtamano").on('change', function() {
    $.ajax({type: "POST",
            url: "http://localhost:5000/checksize",
            data: {tamano: this.value},
            success: function (result){
                if (result=='No disponible'){
                    $("#resultado_tamano").css('color',"red");
                }
                $("#resultado_tamano").text(result);
            }
    });
});
