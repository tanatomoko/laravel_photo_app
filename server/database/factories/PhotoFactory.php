<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Photo;
use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Photo::class, function (Faker $faker) {
    return [
        'id' => Str::random(12),
        'user_id' => function () {
            return factory(User::class)->create()->id;
        },
        'filename' => Str::random(12) . 'jpg',
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
