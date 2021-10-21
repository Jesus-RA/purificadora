<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\Order;
use Illuminate\Http\Request;
use App\Http\Requests\OrderRequest;
use App\Http\Controllers\Controller;

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

        $orders = Order::all();

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
        
        $order = Order::create( $request->all() );

        return response()->json( $order, 201 );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Orders\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        $this->authorize('view', $order);
        
        return response()->json( $order, 200 );
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
