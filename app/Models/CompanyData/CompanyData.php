<?php

namespace App\Models\CompanyData;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyData extends Model
{
    use HasFactory;

    protected $fillable = [
        'main_image',
        'gallery_images',
        'video',
        'phone_number',
        'product_price',
    ];

    protected $casts = [
        'gallery_images' => 'array',
        'product_price' => 'float'
    ];
}
