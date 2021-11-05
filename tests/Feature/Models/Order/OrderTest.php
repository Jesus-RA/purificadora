<?php

namespace Tests\Feature\Models\Order;

use Tests\TestCase;
use App\Models\User;
use App\Models\Order\Order;
use App\Models\Address\Address;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_can_get_total_garrafones_attribute()
    {
        $user = User::factory()->create();
        $user
            ->orders()
            ->saveMany(
                Order::factory()
                    ->times(10)
                    ->make([
                        'quantity' => 1,
                        'address' => 'Kuter Street 342 Arnold MD 32542'
                    ])
            );

        $this->assertEquals( 10, Order::getTotalGarrafones() );

    }

    public function test_it_can_get_total_sold_attribute()
    {
        $user = User::factory()->create();
        $user
            ->orders()
            ->saveMany(
                Order::factory()
                    ->times(3)
                    ->make([
                        'quantity' => 1,
                        'address' => 'Kuter Street 342 Arnold MD 32542',
                        'total' => 30,
                    ])
            );

        $this->assertEquals( 90, Order::getTotalSold() );

    }
}
