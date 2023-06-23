<?php

// tools
use Illuminate\Support\Facades\Route;

// controllers
use App\Http\Controllers\CountryController;
use App\Http\Controllers\CountriesController;

Route::middleware('redirect.connect.invalid')
    ->prefix('country')
    ->controller(CountryController::class)
    ->group(
        function () {
            Route::post('create', 'store')->name('country.create');
            Route::post('{id}', 'update')->name('country.update');
            Route::delete('{id}', 'destroy')->name('country.destroy');
        }
    );

Route::middleware('redirect.connect.invalid')
    ->prefix('countries')
    ->controller(CountriesController::class)
    ->group(
        function () {
            Route::get('list', 'index')->name('countries.show');
        }
    );