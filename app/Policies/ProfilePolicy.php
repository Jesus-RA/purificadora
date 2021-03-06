<?php

namespace App\Policies;

use App\Models\Profile\Profile;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProfilePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Profile\Profile  $profile
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Profile $profile)
    {
        return $user->can('view its profile') && $user->id === $profile->user_id;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Profile\Profile  $profile
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Profile $profile)
    {
        return $user->can('update its profile') && $user->id === $profile->user_id;
    }

}
