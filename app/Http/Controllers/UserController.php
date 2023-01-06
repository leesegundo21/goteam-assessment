<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\UserPokemon;
use App\Models\User;
use Storage;

class UserController extends Controller
{
    //

    public function index(Request $request) {
        $users = user::query();
        if($request->has('search')){
            $search = $request->get('search');
            $users->where(function($query) use ($search) {
                $query->where('name', 'like', "%{$search}%")
                ->orWhere('username', 'like', "%{$search}%");
            });
        }
        $users = $users->with(['pokemons'])->paginate(10)->withQueryString();
        return Inertia::render('User/Index', [
            "users" => $users
        ]);
    }

    public function dashboard() {
        return Inertia::render('User/Dashboard', [
            "pokemons" => auth()->user()->pokemons()->get()
        ]);
    }

    public function profile() {
        return Inertia::render('User/Profile', [
            "user" => auth()->user()
        ]);
    }

    public function update(Request $request) {
        $request->validate([
            'username' => 'required|string|max:255|unique:users,username,' . auth()->id(),
            'firstname' => 'required|string|max:255',
            'birthday' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . auth()->id(),
        ]);

        $user = auth()->user();

        $user->update([
            'username' => $request->username,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'birthday' => $request->birthday
        ]);

        if($request->hasFile('image_file')){
            if($user->image_url){
                Storage::disk('public')->delete($user->image_url);
            }
            $image_path = $request->file('image_file')->store("users/user_{$user->id}", 'public');
            $user->image_url = $image_path;
            $user->save();
        }

        return redirect()->route('user.profile');
    }

    public function show($id) {
        $user = User::with(['pokemons'])->find($id);
        return Inertia::render('User/Pokemon', [
            "user" => $user
        ]);
    }
}
