<?php

namespace Tests\Feature\Http\Controllers\Auth;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_register()
    {
        $data = [
            'email' => 'jesus@gmail.com',
            'password' => 'jamon'
        ];

        $this
            ->post( route('register'), $data, ['Accept' => 'application/json'])
            ->assertStatus(201);

        $this->assertEquals( User::where('email', $data['email'] )->count(), 1);
    }

    public function test_it_can_not_register_twice()
    {
        $data = [
            'email' => 'jesus@gmail.com',
            'password' => 'jamon'
        ];

        User::create( $data );

        $this
            ->post( route('register'), $data )
            ->assertStatus(409);

        $this->assertEquals( User::all( )->count(), 1);
    }
}
