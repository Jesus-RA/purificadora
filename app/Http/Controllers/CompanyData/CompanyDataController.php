<?php

namespace App\Http\Controllers\CompanyData;

use App\Models\CompanyData\CompanyData;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CompanyDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $companyData = CompanyData::first();

        if(!$companyData){
            return response()->json([
                'message' => 'There is no data available.'
            ], 404);
        }

        return response()->json([
            'main_image' => $companyData->main_image,
            'gallery_images' => $companyData->gallery_images,
            'video' => $companyData->video,
            'phone_number' => $companyData->phone_number,
            'product_price' => $companyData->product_price,
        ], 200 );

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $companyData = CompanyData::first();

        if( !$companyData ){
            CompanyData::create( $request->all() );
        }
        
        $request->gallery_images = explode(',', $request->gallery_images);
        
        $companyData->update( $request->all() );

        return response()->json([
            'main_image' => $companyData->main_image,
            'gallery_images' => $companyData->gallery_images,
            'video' => $companyData->video,
            'phone_number' => $companyData->phone_number,
            'product_price' => $companyData->product_price,
        ], 201);
    }

    public function getLandingContent()
    {
        $companyData = CompanyData::first();

        if(!$companyData){
            return response()->json([
                'message' => 'There is no data available.'
            ], 404);
        }

        return response()->json([
            'gallery_images' => $companyData->gallery_images,
            'video' => $companyData->video,
            'phone_number' => $companyData->phone_number,
        ], 200);
    }

    public function getProductPrice()
    {
        $companyData = CompanyData::first();

        if(!$companyData){
            return response()->json([
                'message' => 'There is no data available.'
            ], 404);
        }

        return response()->json([
            'product_price' => $companyData->product_price,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CompanyData  $companyData
     * @return \Illuminate\Http\Response
     */
    public function destroy(CompanyData $companyData)
    {
        //
    }
}
