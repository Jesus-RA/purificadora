<?php

namespace Tests\Feature\Http\Controllers\Order;

use Carbon\Carbon;
use Tests\TestCase;
use App\Models\User;
use App\Models\Order\Order;
use Laravel\Sanctum\Sanctum;
use App\Models\Profile\Profile;
use App\Models\Address\Address;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class OrderControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_only_users_with_permission_can_see_all_orders()
    {
        $user = User::factory()->create()->assignRole(

            Role::create(['name' => 'admin'])
                ->givePermissionTo([
                    Permission::create(['name' => 'view all orders'])
                ])

        );

        Order::factory()
            ->times(20)
            ->create(['user_id' => $user->id, 'address' => 'Kuter Street 342 Arnold MD 32542']);

        Sanctum::actingAs( $user );

        $this
            ->get( route('orders.index'), ['Accept' => 'application/json'] )
            ->assertStatus(200)
            ->assertJsonCount(20);

    }

    public function test_users_without_permission_can_not_see_all_orders()
    {
        $user = User::factory()->create();

        $address = Address::factory()->create();

        Order::factory()
            ->times(20)
            ->create(['user_id' => $user->id, 'address' => 'Kuter Street 342 Arnold MD 32542']);

        Sanctum::actingAs( $user );

        $this
            ->get( route('orders.index'), ['Accept' => 'application/json'] )
            ->assertStatus( 403 );

    }

    public function test_user_with_role_admin_can_create_orders()
    {
        $admin = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'admin'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'create orders'])
                    )
            );


        $data = [
            'quantity' => 10,
            'date' => Carbon::now(),
            'phone' => '1234567890',
            'total' => 10 * 12.50,
            'address' => 'Kuter Street 342 Arnold MD 32542',
            'user_id' => $admin->id
        ];

        Sanctum::actingAs( $admin );

        $this
            ->post( route('orders.store'), $data, ['Accept' => 'application/json'] )
            ->assertCreated();
    }

    public function test_user_with_role_client_can_create_orders()
    {
        $client = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'client'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'create orders'])
                    )
            );

        $data = [
            'quantity' => 10,
            'date' => Carbon::now(),
            'phone' => '1234567890',
            'total' => 10 * 12.50,
            'address' => 'Kuter Street 342 Arnold MD 32542',
            'user_id' => $client->id
        ];

        Sanctum::actingAs( $client );

        $this
            ->post( route('orders.store'), $data, ['Accept' => 'application/json'] )
            ->assertCreated();
    }

    public function test_user_without_permission_can_not_create_orders()
    {
        $user = User::factory()->create();

        $data = [
            'quantity' => 10,
            'date' => Carbon::now(),
            'phone' => '1234567890',
            'total' => 10 * 12.50,
            'address' => 'Kuter Street 342 Arnold MD 32542',
            'user_id' => $user->id
        ];

        Sanctum::actingAs( $user );

        $this
            ->post( route('orders.store'), $data, ['Accept' => 'application/json'] )
            ->assertStatus( 403 );
    }

    public function test_admin_can_see_their_own_orders()
    {
        $user = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'admin'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'view its order'])
                    )
            );

        $order = Order::factory()
            ->create(['user_id' => $user->id, 'address' => 'Kuter Street 342 Arnold MD 32542']);

        Sanctum::actingAs( $user );

        $this
            ->get( route('orders.show', $order->id ), ['Accept' => 'application/json'] )
            ->assertStatus(200);
    }

    public function test_client_can_see_their_own_orders()
    {
        $user = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'client'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'view its order'])
                    )
            );

        $order = Order::factory()
            ->create(['user_id' => $user->id, 'address' => 'Kuter Street 342 Arnold MD 32542']);

        Sanctum::actingAs( $user );

        $this
            ->get( route('orders.show', $order->id ), ['Accept' => 'application/json'] )
            ->assertStatus(200);
    }

    public function test_user_can_not_see_orders_not_owns()
    {
        $user = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'client'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'view its order'])
                    )
            );

        $user2 = User::factory()->create();

        $order = Order::factory()
            ->create(['user_id' => $user2->id, 'address' => 'Kuter Street 342 Arnold MD 32542']);

        Sanctum::actingAs( $user );

        $this
            ->get( route('orders.show', $order->id ), ['Accept' => 'application/json'] )
            ->assertStatus(403);
    }

    public function test_admin_can_update_orders_he_owns()
    {
        $user = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'admin'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'update orders'])
                    )
            );

        $order = Order::factory()
            ->create(['user_id' => $user->id, 'address' => 'Kuter Street 342 Arnold MD 32542']);

        Sanctum::actingAs( $user );

        $data = [
            'total' => 123.00
        ];

        $this
            ->put( route('orders.update', $order->id ), $data, ['Accept' => 'application/json'] )
            ->assertStatus(201);
    }

    public function test_client_can_update_orders_he_owns()
    {
        $user = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'client'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'update orders'])
                    )
            );

        $order = Order::factory()
            ->create(['user_id' => $user->id, 'address' => 'Kuter Street 342 Arnold MD 32542']);

        Sanctum::actingAs( $user );

        $data = [
            'total' => 123.00
        ];

        $this
            ->put( route('orders.update', $order->id ), $data, ['Accept' => 'application/json'] )
            ->assertStatus(201);
    }

    public function test_user_can_not_update_orders_not_owns()
    {
        $user = User::factory()->create();            

        $user2 = User::factory()
            ->create()
            ->assignRole(
                Role::create(['name' => 'client'])
                    ->givePermissionTo(
                        Permission::create(['name' => 'update order'])
                    )
            );

        $order = Order::factory()
            ->create(['user_id' => $user->id, 'address' => 'Kuter Street 342 Arnold MD 32542']);

        Sanctum::actingAs( $user2 );

        $data = [
            'total' => 123.00
        ];

        $this
            ->put( route('orders.update', $order->id ), $data, ['Accept' => 'application/json'] )
            ->assertStatus(403);
    }

    public function test_it_can_get_user_orders()
    {
        $user = User::factory()->create();
        $user->orders()->saveMany( Order::factory()->times(10)->create() );

        $this
            ->actingAs( $user )
            ->get( route('orders.user_orders', $user->id) )
            ->assertStatus( 200 )
            ->assertJsonStructure([
                'orders' => [
                    '*' => [
                        'date',
                        'quantity',
                        'total'
                    ]
                ],
                'quantity',
                'total'
            ]);
    }

}
