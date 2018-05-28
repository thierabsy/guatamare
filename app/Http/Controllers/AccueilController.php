<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Auteur_profil;
use App\Article;
use App\Pub_annonce;
use App\Pub_magazine;

class AccueilController extends Controller
{
    public function index()
    {
        $mydata2 = Article::where("categorie", "sante")->get();
        $mydata1 = Article::all();
        $mydata3 = Pub_annonce::all();
        $mydata4 = Pub_magazine::all();
        return response()->json([ 
                                    "articles" => $mydata1, 
                                    "articleSante" => $mydata2, 
                                    "annonces" => $mydata3,
                                    "magazines" => $mydata4
                                ]);
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
