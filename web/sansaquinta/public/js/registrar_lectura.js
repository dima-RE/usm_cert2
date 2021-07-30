const cargarMedidor = async()=>{
    let resultado = await axios.get("api/medidores/get");
    let medidores = resultado.data;
    // cargar las marcas dentro del select
    let medidorSelect = document.querySelector("#medidor-select");
    medidores.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        medidorSelect.appendChild(option);
    });
}

const cargarMedidas = async()=>{
    let resultado = await axios.get("api/medidas/get");
    let medidas = resultado.data;
    let medidaSelect = document.querySelector("#medida-select");
    medidas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        medidaSelect.appendChild(option);
    });
}

const comprobar = (l)=>{
    let errores = "";

    if (l.fecha == ""){
        errores = errores.concat("Tiene que elegir una fecha. ");
    };
    if (l.hora == ""){
        errores = errores.concat("Tiene que indicar una hora. ");
    };
    if (l.direccion == ""){
        errores = errores.concat("La dirección no puede estar vacía. ");
    }
    if ((l.valor<=0) || (l.valor>500)){
        errores = errores.concat("Valor debe ser mayor a 0 y menor a 500.");
    };
    if (errores != ""){
        Swal.fire("Errores encontrados",`Los siguientes errores son: \n${errores}`,"info");
        return 0;
    } else {
        return 1;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    cargarMedidor();
    cargarMedidas();
})

document.querySelector("#registrar-btn").addEventListener("click",async()=>{
    let fecha = document.querySelector("#fecha-txt").value;
    let hora = document.querySelector("#hora-txt").value;
    let medidor = document.querySelector("#medidor-select").value;
    let direccion = document.querySelector("#direccion-txt").value;
    let valor = document.querySelector("#valor-txt").value;
    let medida = document.querySelector("#medida-select").value;

    let lectura = {};
    lectura.fecha = fecha;
    lectura.hora = hora;
    lectura.medidor = medidor;
    lectura.direccion = direccion;
    lectura.valor = parseInt(valor);
    lectura.medida = medida;

    let comp = comprobar(lectura);

    if (comp == 1){
        let res = await registrarLectura(lectura);
        await Swal.fire("Éxito",`Lectura creada exitosamente`,"info");
        window.location.href = "consultar_mediciones";
    }
});