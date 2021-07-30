
const getLecturas = async ()=>{
    let resp = await axios.get("api/lecturas/get");
    return resp.data;
};

const registrarLectura = async (lectura)=>{
    let resp = await axios.post("api/lecturas/post", lectura, {
        headers: {
            "Content-Type": "application/json"
        }
    });
};

const descartarLectura = async(id)=>{
    try{
        let resp = await axios.post("api/lecturas/delete", {id},{
            headers: {
                "Content-Type": "aplication/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    };
};