<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Article;
use App\Auteur_profil;

class AccueilController extends Controller
{
    public function index()
    {
        $mydata2 = "Accueil Page";
        return response()->json($mydata2);
    }

    public function data($id)
    {
        // $data = Article::where('user_id', $id)->get();
        $data = Article::get();
        $data2 = Auteur_profil::get();
        $data3 = array([1,2,3]);
        $mydata1 = array();
        $mydata1['data1'] = $data;
        $mydata1['data2'] = $data2;
        $mydata1['data3'] = $data3;
        // $dt = toArray($data, $data2);
        return response()->json($mydata1);
    }
}
