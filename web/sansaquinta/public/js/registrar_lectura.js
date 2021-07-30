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
    lectura.valor = valor;
    lectura.medida = medida;
    let res = await registrarLectura(lectura);

    await Swal.fire("Éxito","Lectura creada exitosamente","info");
    
    window.location.href = "consultar_mediciones";
});