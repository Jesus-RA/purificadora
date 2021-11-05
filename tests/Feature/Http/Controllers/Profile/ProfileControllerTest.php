<?php

namespace Tests\Feature\Http\Controllers\Profile;

use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
use App\Models\Address\Address;
use App\Models\Profile\Profile;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class ProfileControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_profile_is_created_when_storing_a_user()
    {
        $user = User::factory()->create();

        $this->assertInstanceOf( Profile::class, $user->profile );
        $this->assertEquals( $user->profile, Profile::first() );
    }

    public function test_user_can_see_its_profile()
    {
        $user = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'client'])
                    ->givePermissionTo( Permission::create(['name' => 'view its profile'])
                )
            );

        Sanctum::actingAs( $user );

        $this
            ->get( route('profiles.show', $user->profile->id), ['Accept' => 'application/json'] )
            ->assertStatus(200)
            ->assertExactJson( json_decode(json_encode($user->profile), true) );

    }

    public function test_user_can_update_its_profile()
    {
        $user = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'client'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'update its profile'])
                    )
            );

        $data = [
            'name' => 'Jesús',
            'lastname' => 'Ramírez Alejandro',
            'phone' => '4439957384',
            'address' => 'Kuter Street 342 Arnold MD 32542'
        ];

        Sanctum::actingAs( $user );

        $this
            ->put( route('profiles.update', $user->profile->id), $data, ['Accept' => 'application/json'])
            ->assertStatus(201)
            ->assertExactJson( json_decode(json_encode($user->profile->fresh()), true) );


    }

}
