<?php

namespace Database\Factories\Order;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Order\Order;
use App\Models\Address\Address;
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
            'total' => $this->faker->randomFloat(4, 0.00, 4000.00),
            'address' => $this->faker->address(),
            'user_id' => User::all()->random()->id,
        ];
    }
}
