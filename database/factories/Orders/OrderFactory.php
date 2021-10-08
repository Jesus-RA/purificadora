<?php

namespace Database\Factories\Orders;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Orders\Order;
use App\Models\Addresses\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'quantity' => random_int(1, 20),
            'date' => Carbon::now(),
            'phone' => $this->faker->phoneNumber(),
            'total' => $this->faker->randomFloat(),
            'user_id' => User::all()->random()->id,
            'address_id' => Address::all()->random()->id,
        ];
    }
}
