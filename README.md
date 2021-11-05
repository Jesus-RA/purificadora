# Purificadora Emperador Web Application
This web application has the goal to show to the people who is Purificadora Emperador and invite them
to join to the community that does orders through the web applicaction.

* Guests could see who is Purificadora Emperador in the landing page.
* Customers and admins can make orders.
* Admin can manage some of the landing page content.

## To get started follow the next commands

#### Clone the repository
```
git clone https://github.com/Jesus-RA/purificadora.git
```

#### Install all PHP dependencies
```
composer install
```

#### Install all JavaScript dependencies
```
npm install
```

#### Create .env file
Copy .env.example file and rename it to .env

#### Generate project key
```
php artisan key:generate
```

#### Execute all test
```
php artisan test
```

#### Configure sqlite database
* Make sure you have in your .env file the next configuration
```
DB_CONNECTION=sqlite
#DB_HOST=127.0.0.1
#DB_PORT=3306
#DB_DATABASE=e_commerce_test
#DB_USERNAME=root
#DB_PASSWORD=
```
* Create database.sqlite file in ./database
* Run all migrations to create database tables
```
php artisan migrate
```

#### Seed data to create roles and permissions
```
php artisan db:seed
```

#### Start servers

##### PHP server
```
php artisan serve
```

##### Webpack server
It is important to run this server to see the SPA changes in development
```
npm run watch
```

#### Admin credentials
```
{
    email: 'admin@emperador.com'
    password: 'password'
}
```