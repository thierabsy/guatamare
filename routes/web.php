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
Route::get('/auteur', function () {
    return view('welcome');
});
Route::get('/admin', function () {
    return view('welcome');
});
Route::get('/publicite', function () {
    return view('welcome');
});

Route::get('/data', 'AccueilController@index');
Route::get('/data/categorie/{pages}', 'PagesController@index');
Route::get('/data/categorie/{pages}/{articles}', 'SinglearticleController@index');
Route::get('/data/kiosque', 'KiosqueController@index');
Route::get('/data/auteur', 'AuteurController@index');
Route::get('/data/admin', 'AdminController@index');
Route::get('/data/publicite', 'PubliciteController@index');
Route::post('/data/publicite/profil', 'PubliciteController@profil');
