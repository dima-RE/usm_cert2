const iniciarDescarte = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({title:"¿Estas seguro?", text:"La accion es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
       if(await descartarLectura(id)){
          let lecturas = await getLecturas();
          cargarTabla(lecturas);
          Swal.fire("Operacion Completada","La lectura ha sido descartada exitosamente","info");
       } else {
          Swal.fire("Error","La lectura no ha sido encontrada","error")
       };
    } else {
       Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    };
 };
 
 
  const cargarTabla = (lecturas)=>{
     let tbody = document.querySelector("#tbody-mediciones");
     tbody.innerHTML = "";
 
     for(let i=0; i < lecturas.length; ++i){
         let tr = document.createElement("tr");
         
         let tdfecha = document.createElement("td");
         tdfecha.innerText = lecturas[i].fecha;

         let tdhora = document.createElement("td");
         tdhora.innerText = lecturas[i].hora;

         let tdmedidor = document.createElement("td");
         tdmedidor.innerText = lecturas[i].medidor;

         let tdvalor = document.createElement("td");
         tdvalor.classList.add("text-center");
         let icono = document.createElement("i");

         if (lecturas[i].medida == "Kilowatts"){
             tdvalor.innerText = tdvalor.concat(lecturas[i].valor, " kW");
         } else if (lecturas[i].medida == "Watts"){
            tdvalor.innerText = tdvalor.concat(lecturas[i].valor, " W");
         } else if (lecturas[i].medida == "Temperatura"){
            tdvalor.innerText = tdvalor.concat(lecturas[i].valor, " C");
            if (lecturas[i].valor > 60){
                icono.classList.add("fas", "fa-fire", "text-danger","fa-2x");
                tdvalor.appendChild(icono);
            };
         };
 
         let tdaccion = document.createElement("td");
         let botonDescartar = document.createElement("button");
 
         botonDescartar.innerText = "Descartar";
         botonDescartar.classList.add("btn","btn-danger");
         botonDescartar.idLectura = lecturas[i].id;
         botonDescartar.addEventListener("click", iniciarDescarte);
 
         tdaccion.appendChild(botonDescartar);
 
         tr.appendChild(tdfecha);
         tr.appendChild(tdhora);
         tr.appendChild(tdmedidor);
         tr.appendChild(tdvalor);
         tr.appendChild(tdaccion);
 
         tbody.appendChild(tr);
     }
  }
  
  document.addEventListener("DOMContentLoaded", async()=>{
     let lecturas = await getLecturas();
     cargarTabla(lecturas);
  })