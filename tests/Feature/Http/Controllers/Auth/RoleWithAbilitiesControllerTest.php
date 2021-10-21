<?php

namespace Tests\Feature\Http\Controllers\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Laravel\Sanctum\Sanctum;

class RoleWithAbilitiesControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_get_role_and_abilities_of_user()
    {
        $user = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'admin'])
                    ->syncPermissions([
                        Permission::create(['name' => 'view all orders']),
                        Permission::create(['name' => 'create orders']),
                        Permission::create(['name' => 'view its order']),
                    ])
            );


        Sanctum::actingAs( $user );

        $this
            ->get( route('role_abilities'), ['Accept' => 'application/json'] )
            ->assertStatus( 200 )
            ->assertJsonStructure([
                'role',
                'abilities' => []
            ]);

    }
}
