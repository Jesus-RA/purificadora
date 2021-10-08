<?php

namespace Database\Seeders;

use App\Models\Addresses\Address;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Address::factory()->times(10)->create();
    }
}
