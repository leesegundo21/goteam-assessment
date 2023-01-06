<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPokemon extends Model
{
    use HasFactory;

    protected $fillable = [
        'pokeId',
        'details',
        'user_id',
        'name',
        'is_liked',
        'is_hated'
    ];

    public function users() {
        return $this->belongsTo(\App\Models\User::class, 'user_id');
    }
}
