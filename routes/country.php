<?php

// tools
use Illuminate\Support\Facades\Route;

// controllers
use App\Http\Controllers\CountryController;
use App\Http\Controllers\CountriesController;

Route::middleware('auth')
    ->prefix('country')
    ->controller(CountryController::class)
    ->group(
        function () {
            Route::post('create', 'store')->name('country.create');
            Route::post('update', 'update')->name('country.update');
            Route::delete('delete', 'destroy')->name('country.destroy');
        }
    );

Route::middleware('auth')
    ->prefix('countries')
    ->controller(CountriesController::class)
    ->group(
        function () {
            Route::get('list', 'index')->name('countries.show');
        }
    );