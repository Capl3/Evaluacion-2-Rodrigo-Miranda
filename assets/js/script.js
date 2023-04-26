$.ajax({
    type: "get",
    url: "https://digimon-api.vercel.app/api/digimon",
    dataType: "json",
    success: function (response) {
        tabla(response);
    }
});

function tabla(datos) {
    var cuerpoTabla = document.querySelector('#cuerpoTabla');
    for (var i = 0; i < datos.length; i = i + 1) {
        var fila = document.createElement('tr');
        var columnaUno = document.createElement('td');
        var columnaDos = document.createElement('img');
        var columnaTres = document.createElement('td');
        columnaUno.innerHTML = datos[i].name;
        columnaDos.src = datos[i].img;
        columnaTres.innerHTML = datos[i].level;
        fila.append(columnaUno, columnaDos, columnaTres);
        cuerpoTabla.append(fila);
    }
}
/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr> */
$("#inputBuscar").on("keyup", function () {
    var texto = $(this).val().toLowerCase();
    $("table tbody tr").each(function () {
        var fila = $(this).text().toLowerCase();
        if (fila.indexOf(texto) === -1) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
});


function recargarTabla() {
    location.reload();
}