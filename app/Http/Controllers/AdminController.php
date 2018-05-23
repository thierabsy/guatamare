<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $mydata1 = "Admin";
        return response()->json($mydata1);
    }

    public function article(Request $request, $article)
    {

        if($request->hasFile("image")){
                $filename= "auteur_article_".$request->id.".jpg";
                // $filename= "auteur_profil_12.jpg";
                $file = $request->file("image")->move("storage/auteur", $filename);
        } else {
            $filename=  "auteur_article_".$request->id.".jpg";
        };
        
        $saveArticle = new Article::find($article) ;
        $saveArticle->user_id = $request->user_id;
        $saveArticle->titre = $request->titre;
        $saveArticle->categorie = $request->categorie;
        $saveArticle->resume = $request->resume;
        $saveArticle->image = $filename;
        $saveArticle->articlebody = $request->articlebody;
        $saveArticle->save();

        return response()->json($saveArticle);
    }
    }
}
