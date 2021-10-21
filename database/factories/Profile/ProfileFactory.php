<?php

namespace Database\Factories\Profile;

use App\Models\Profile\Profile;
use App\Models\Address\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Profile::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName(),
            'lastname' => $this->faker->lastName(),
            'phone' => $this->faker->phoneNumber(),
            'picture' => $this->faker->imageUrl(),
            'address' => $this->faker->address()
        ];
    }
}
