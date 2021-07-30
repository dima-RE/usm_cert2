@extends('layouts.master')

@section('contenido')
    
    <div class="row mt-5-">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-danger text-center text-light h4">
                    <span>Registrar Lectura</span>
                </div>
                <div class="card-body">
                    <div class="mb3">
                        <label for="fecha-txt" class="form-label">Fecha</label>
                        <input type="date" id="fecha-txt" class="form-control">
                    </div>
                    <div class="mb3">
                        <label for="hora-txt" class="form-label">Hora</label>
                        <input type="time" id="hora-txt" class="form-control">
                    </div>
                    <div class="mb3">
                        <label for="medidor-select" class="form-label">Medidor</label>
                        <select id="medidor-select" class="form-select">
                            
                        </select>
                    </div>
                    <div class="mb3">
                        <label for="direccion-txt" class="form-label">Dirección</label>
                        <input type="text" id="direccion-txt" class="form-control">
                    </div>
                    <div class="mb3">
                        <label for="valor-txt" class="form-label">Valor</label>
                        <input type="number" id="valor-txt" class="form-control">
                    </div>
                    <div class="mb3">
                        <label for="medida-select" class="form-label">Tipo de Medida</label>
                        <select id="medida-select" class="form-select">
                            
                        </select>
                    </div>
                    
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="registrar-btn" type="button" class="btn btn-danger">Registrar</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('javascript')
    
    <script src="{{asset('js/lecturasService.js')}}"></script>
    <script src="{{asset('js/registrar_lectura.js')}}"></script>

@endsection