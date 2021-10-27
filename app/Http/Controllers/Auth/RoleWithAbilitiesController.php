<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoleWithAbilitiesController extends Controller
{
    public function index()
    {

        $permissions = auth()->user()->roles()->with('permissions')->get()
                        ->pluck('permissions')
                        ->flatten()
                        ->pluck('name')
                        ->toArray();

        return response()->json([
            'role' => auth()->user()->getRoleNames()[0],
            'abilities' => $permissions
        ], 200);
    }
}
