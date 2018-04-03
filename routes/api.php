<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/data', function (){
//     // $var = [2];
//     $v2 = ["Hi from Laravel", "How are u!"];
//     return response()->json($v2);
// });
// Route::get('/data/{id}', function ($id){
//     // $data = Article::where('user_id', $id)->get();
//     $data = Article::get();
//     $data2 = Auteur_profil::get();
//     $data3 = array([1,2,3]);
//     $mydata1 = array();
//     $mydata1['data1'] = $data;
//     $mydata1['data2'] = $data2;
//     $mydata1['data3'] = $data3;
//     // $dt = toArray($data, $data2);
//     return response()->json($mydata1);
// });
Route::get('/data', 'AccueilController@index');
Route::get('/data/categorie/{pages}', 'PagesController@index');
Route::get('/data/categorie/{pages}/{articles}', 'SinglearticleController@index');
Route::get('/data/kiosque', 'KiosqueController@index');
Route::get('/data/auteur', 'AuteurController@index');
Route::get('/data/admin', 'AdminController@index');
Route::get('/data/publicite', 'PubliciteController@index');
Route::post('/data/publicite/profil', 'PubliciteController@profil');