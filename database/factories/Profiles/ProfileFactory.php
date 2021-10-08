<?php

namespace Database\Factories\Profiles;

use App\Models\Profiles\Profile;
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
            'phone' => $this->faker->phoneNumber(),
            'picture' => $this->faker->imageUrl(),
            'address_id' => $this->faker->randomNumber()
        ];
    }
}
