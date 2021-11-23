<?php

namespace App\Http\Controllers\Order;

use App\Models\User;
use App\Models\Order\Order;
use Illuminate\Http\Request;
use App\Http\Requests\OrderRequest;
use App\Http\Controllers\Controller;
use App\Models\CompanyData\CompanyData;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Order::class);

        $orders = Order::all()->each(function($order){
            $order->ownerRole = User::find($order->user_id)->roles->pluck('name')->first();
        });

        return response()->json( $orders, 200 );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderRequest $request)
    {
        $this->authorize('create', Order::class);

        $companyData = CompanyData::first();

        if( !$companyData && $companyData->product_price ){
            return response()->json([
                'message' => 'Es necesario especificar el precio del producto antes de poder ingresar ordenes.'
            ], 404);
        }
        
        $order = Order::make( $request->all() );
        $order->total = $companyData->product_price * $request->quantity;
        auth()->user()->orders()->save( $order );

        return response()->json( $order, 201 );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Orders\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function user_orders(Request $request, User $user)
    {

        if( $request->from > $request->to ){
            return response()->json([
                'message' => 'From date must be less than to date'
            ], 422);
        }

        if( $request->from != "null" && $request->to != "null" ){

            $orders = $user->orders()
                        ->where('date', '>=', $request->from)
                        ->where('date', '<=', $request->to)
                        ->get();
        }else{

            $orders = $user->orders;

        }

        $orders = $orders->map(function($order){
            return [
                'date' => $order->date,
                'quantity' => $order->quantity,
                'total' => $order->total,
            ];
        });

        $quantity = array_reduce( $orders->toArray(), function( $totalQuantity, $order ){
            return $totalQuantity += $order['quantity'];
        }, 0);

        $total = array_reduce( $orders->toArray(), function( $totalSum, $order ){
            return $totalSum += $order['total'];
        }, 0);
        
        return response()->json( [
            'orders' => $orders,
            'quantity' => $quantity,
            'total' => $total
        ], 200 );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Orders\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        $this->authorize('update', $order);

        $order->update( $request->all() );

        return response()->json( $order->fresh(), 201 );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Orders\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
