<?php

namespace Tests\Feature\Http\Controllers\Auth;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginControllerTest extends TestCase
{

    use RefreshDatabase;

    public function test_login(){
        
        $user = User::factory()->create([
            'email' => 'jesus@gmail.com',
        ]);

        $this
            ->post( route('login'), [
                'email' => $user->email,
                'password' => 'password',
            ], [
                ['Accept' => 'application/json']
            ])
            ->assertStatus(200);
        
        $this->assertEquals( Auth::check(), true );
        $this->assertEquals( auth()->user()->email, $user->email );
    }

}
