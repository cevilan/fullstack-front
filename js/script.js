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