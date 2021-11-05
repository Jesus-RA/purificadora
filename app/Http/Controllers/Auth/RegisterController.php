<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request){

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if( User::where('email', $request->email)->first() )
            return response()->json([
                'error' => [
                    'message' => 'El email ya está registrado.'
                ]
            ], 409);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        Auth::login( $user );

        return response()->json( $user, 201);

    }
}
