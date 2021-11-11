<?php

namespace Database\Seeders;

use App\Models\Order\Order;
use Illuminate\Database\Seeder;
use App\Models\Profile\Profile;
use App\Models\Address\Address;

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

            Order::factory()->times(10)->create([
                'user_id' => $profile->user_id,
            ]);
            
        });
    }
}
