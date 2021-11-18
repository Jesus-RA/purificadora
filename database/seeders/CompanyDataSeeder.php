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
                'https://cdn.dribbble.com/users/22455/screenshots/16201402/media/de4b77a4ed2f3e3c5ab0405805b843ee.png',
                'https://mir-s3-cdn-cf.behance.net/projects/original/11167475.548101dba9caa.jpg',
                'https://mir-s3-cdn-cf.behance.net/projects/original/a1ce5333363895.Y3JvcCwxMDUwLDgyMiw3MiwyOA.jpg'
            ],
            'video' => 'https://www.youtube.com/embed/qm0IfG1GyZU',
            'phone_number' => '2224825554',
            'product_price' => 12.50
        ]);
    }
}
