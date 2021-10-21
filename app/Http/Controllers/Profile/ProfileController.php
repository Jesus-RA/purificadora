<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Models\Address\Address;
use App\Models\Profile\Profile;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Profiles\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function show(Profile $profile)
    {
        $this->authorize('view', $profile);

        return response()->json( $profile, 200 );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Profiles\Profile  $profile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Profile $profile)
    {
        $this->authorize('update', $profile);
        
        $request->validate([
            'name' => 'string',
            'lastname' => 'string',
            'phone' => 'string',
            'picture' => 'string',
            'address' => 'string',
            'user_id' => 'integer'
        ]);

        $profile->update( $request->all() );

        return response()->json( $profile, 201 );
    }

}
