<?php

namespace App\Models\Profile;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\Profile\ProfileFactory;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'lastname',
        'phone',
        'picture',
        'address'
    ];

    public $casts = [
        'user_id' => 'int',
    ];

    protected static function newFactory()
    {
        return ProfileFactory::new();
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

}
