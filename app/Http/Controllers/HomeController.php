<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Http;
use App\Models\UserPokemon;

class HomeController extends Controller
{
    //
    public function index(Request $request) {
        $link = $request->has('link') ? $request->get('link') : 'https://pokeapi.co/api/v2/pokemon';
        $response = Http::get($link);
        $liked_pokemons = auth()->user()->pokemons()->where('is_liked', true)->get();
        $hated_pokemons = auth()->user()->pokemons()->where('is_hated', true)->get();
        return Inertia::render('Home', [
            "pokemons" => $response->json(),
            "likedpokemons" => $liked_pokemons,
            "hatedpokemons" => $hated_pokemons
        ]);
    }
}
