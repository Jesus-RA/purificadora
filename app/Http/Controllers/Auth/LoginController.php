<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function login(Request $request){

        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        $credentials = [ 'email' => $request['email'], 'password' => $request['password'] ];

        if( Auth::attempt($credentials) ){
            $request->session()->regenerate();

            return response()->json( Auth::user(), 200 );
        }

        return response()->json([
            'error' => 'Las credenciales no coinciden con nuestros registros.'
        ], 401);

    }
}
