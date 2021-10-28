<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\Address\Address;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::create(['name' => 'admin']);
        $client = Role::create(['name' => 'client']);

        $create_order = Permission::create(['name' => 'create orders']);
        $view_order = Permission::create(['name' => 'view its order']);
        $update_orders = Permission::create(['name' => 'update orders']);

        $admin->syncPermissions([
            Permission::create(['name' => 'view all orders']),
            $create_order,
            $view_order,
            $update_orders
        ]);

        $client->syncPermissions([
            $create_order,
            $view_order,
            $update_orders,
            Permission::create(['name' => 'view its profile']),
            Permission::create(['name' => 'update its profile']),
        ]);

        User::factory()->create([
            'email' => 'admin@emperador.com',
        ])->assignRole( $admin );

        User::factory()->create([
            'email' => 'client@emperador.com',
        ])->assignRole( $client );
        
        $this->call(AddressSeeder::class);
        \App\Models\User::factory(10)->create();
        $this->call(ProfileSeeder::class);
        $this->call(OrderSeeder::class);
    }
}
