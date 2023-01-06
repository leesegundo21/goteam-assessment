<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Http;
use App\Models\UserPokemon;
use DB;

class PokemonController extends Controller
{
    //

    public function show($name, Request $request){
        $response = Http::get("https://pokeapi.co/api/v2/pokemon/{$name}");
        return Inertia::render('Pokemon', [
            "details" => $response->json(),
            "isliked" => auth()->user()->pokemons()->where('name', $name)->where('is_liked', true)->exists(),
            "ishated" => auth()->user()->pokemons()->where('name', $name)->where('is_hated', true)->exists()
        ]);
    }

    public function likePokemon($name, Request $request) {
        try{
            DB::beginTransaction();
            $response = Http::get("https://pokeapi.co/api/v2/pokemon/{$name}");
            $user_pokemon = UserPokemon::where('pokeId', $request->poke_id)->where('user_id', auth()->id())->first();
            if($user_pokemon) {
                $user_pokemon->details = json_encode($response->json());
                $user_pokemon->name = $request->name;
                $user_pokemon->is_liked = true;
                $user_pokemon->is_hated = false;
                $user_pokemon->save();
            }else{
                if(auth()->user()->pokemons()->where('is_liked', true)->count() >=3 ) {
                    return response()->json([
                        "success" => false,
                        "error" => "limit Exceeds"
                    ]);
                }
                UserPokemon::create([
                    "pokeId" => $request->poke_id,
                    "details" => json_encode($response->json()),
                    "user_id" => auth()->id(),
                    "name" => $request->name,
                    "is_liked" => true,
                    "is_hated" => false,
                ]);
            }

            DB::commit();

            return response()->json([
                "success" => true
            ]);

        }catch(\Exception $ex) {
            DB::rollBack();
            return response()->json([
                "success" => false,
                "error" => $ex
            ]);
        }
    }

    public function hatePokemon($name, Request $request) {
        try{
            DB::beginTransaction();
            $response = Http::get("https://pokeapi.co/api/v2/pokemon/{$name}");
            $user_pokemon = UserPokemon::where('pokeId', $request->poke_id)->where('user_id', auth()->id())->first();
            if($user_pokemon) {
                $user_pokemon->details = json_encode($response->json());
                $user_pokemon->name = $request->name;
                $user_pokemon->is_liked = false;
                $user_pokemon->is_hated = true;
                $user_pokemon->save();
            }else{
                if(auth()->user()->pokemons()->where('is_hated', true)->count() >=3 ) {
                    return response()->json([
                        "success" => false,
                        "error" => "limit Exceeds"
                    ]);
                }
                UserPokemon::create([
                    "pokeId" => $request->poke_id,
                    "details" => json_encode($response->json()),
                    "user_id" => auth()->id(),
                    "name" => $request->name,
                    "is_liked" => false,
                    "is_hated" => true,
                ]);
            }

            DB::commit();

            return response()->json([
                "success" => true
            ]);

        }catch(\Exception $ex) {
            DB::rollBack();
            return response()->json([
                "success" => false,
                "error" => $ex
            ]);
        }
    }

    public function deletePokemon($name) {
        auth()->user()->pokemons()->where('name', $name)->delete();
        return response()->json([
            "success" => true
        ]);
    }
}
