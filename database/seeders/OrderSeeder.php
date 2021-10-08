<?php

namespace Database\Seeders;

use App\Models\Orders\Order;
use Illuminate\Database\Seeder;
use App\Models\Profiles\Profile;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Profile::all()->each(function($profile){

            Order::factory()->create([
                'user_id' => $profile->user_id,
                'address_id' => $profile->address_id,
                'phone' => $profile->phone,
            ]);
            
        });
    }
}
