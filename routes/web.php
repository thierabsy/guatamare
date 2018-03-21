<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/categorie/{pages}', function () {
    return view('welcome');
});
Route::get('/categorie/{pages}/{article}', function () {
    return view('welcome');
});
Route::get('/kiosque', function () {
    return view('welcome');
});
Route::get('/profil', function () {
    return view('welcome');
});
Route::get('/admin', function () {
    return view('welcome');
});
Route::get('/publicite', function () {
    return view('welcome');
});
