@extends('layouts.master')

@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <img src="{{asset('img/testigo.jpg')}}" class="image" alt="never">
                <div class="card-body">
                <h5 class="card-title">El sentido de la vida</h5>
                <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident dolores voluptatem ipsa! Ad odit ipsa, deleniti illo iure provident quibusdam, recusandae ipsum quo voluptas atque? Commodi tempora minima rerum.
                </p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="btn btn-primary">Testigos de Jehová</a>
                </div>
            </div>
        </div>
    </div>
@endsection