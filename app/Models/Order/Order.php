<?php

namespace App\Models\Order;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
        'date',
        'phone',
        'total',
        'address',
        'user_id',
    ];

    protected $casts = [
        'quantity' => 'integer',
        'total' => 'float'
    ];

    public function client(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public static function getTotalGarrafones(){

        return array_reduce( Order::all(['quantity'])->toArray(), function($quantity, $order){
            return $quantity += $order['quantity'];
        }, 0);

    }

    public static function getTotalSold()
    {
        return array_reduce( Order::all('total')->toArray(), function($quantity, $order){
            return $quantity += $order['total'];
        }, 0);

    }

}
