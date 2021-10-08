<?php

namespace Database\Factories\Addresses;

use App\Models\Addresses\Address;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Address::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'calle' => $this->faker->streetAddress(),
            'numero_exterior' => random_int(1, 50),
            'numero_interior' => fn() => random_int(0, 1) ? random_int(1, 50) : null,
            'colonia' => $this->faker->streetName(),
            'municipio' => $this->faker->city(),
            'estado' => $this->faker->country(),
            'codigo_postal' => random_int(10000, 40000)
        ];
    }
}
