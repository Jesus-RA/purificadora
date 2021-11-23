<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CompanyData\CompanyData;

class CompanyDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CompanyData::create([
            'gallery_images' => [
                'https://i.ytimg.com/vi/aAm26J-z9NY/maxresdefault.jpg',
                'https://www.elheraldodechihuahua.com.mx/local/dv7xgc-purificadora-de-agua-24.jpg/ALTERNATES/LANDSCAPE_1140/purificadora-de-agua-24.jpg',
                'https://www.manantialwater.com.mx/blog/wp-content/uploads/2020/12/purificadora-de-agua-negocio.jpg'
            ],
            'video' => 'https://www.youtube.com/embed/nKy9_PvtsGA',
            'phone_number' => '2224825554',
            'product_price' => 12.50
        ]);
    }
}
