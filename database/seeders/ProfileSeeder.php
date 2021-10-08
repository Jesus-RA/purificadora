<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use App\Models\Profiles\Profile;
use App\Models\Addresses\Address;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $addresses = Address::all('id');

        User::all()->each(function($user) use($addresses){

            Profile::factory()->create([
                'user_id' => $user->id,
                'address_id' => $addresses->random()->id,
            ]);

        });
    }
}
