<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lectura;

class LecturasController extends Controller
{
    public function getMedidores(){
        $medidores = ["01","02","03","04","05","06","07","08","09","10"];
        return $medidores;
    }

    public function getMedidas(){
        $medidas = ["Kilowatts","Watts","Temperatura"];
        return $medidas;
    }

    public function getLecturas(){
        $lecturas = Lectura::all();
        return $lecturas;
    }

    public function registrarLectura(Request $request){
        $input = $request->all();

        $lectura = new Lectura();
        $lectura->fecha = $input["fecha"];
        $lectura->hora = $input["hora"];
        $lectura->medidor = $input["medidor"];
        $lectura->direccion = $input["direccion"];
        $lectura->valor = $input["valor"];
        $lectura->medida = $input["medida"];

        $lectura->save();
        return $lectura;
    }

    public function descartarLectura(Request $request){
        $input = $request->all();
        $id = $input["id"];

        $lectura = Lectura::findOrFail($id);
        $lectura->delete();
        return "ok";
    }
}
