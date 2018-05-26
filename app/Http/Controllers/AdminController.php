<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use App\Pub_annonce;
use App\Pub_magazine;

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
        
        $saveArticle = Article::find($article) ;
        $saveArticle->user_id = $request->user_id;
        $saveArticle->titre = $request->titre;
        $saveArticle->categorie = $request->categorie;
        $saveArticle->resume = $request->resume;
        $saveArticle->status = $request->status;
        $saveArticle->slider = $request->slider;
        $saveArticle->image = $filename;
        $saveArticle->articlebody = $request->articlebody;
        $saveArticle->save();

        return response()->json($saveArticle);
    }
    public function publicite(Request $request, $publicite)
    {
        if($request->hasFile("img")){
            $time = time(); 
            $filename= "annonce_".$request->user_id."-".$time.".jpg";
            $file = $request->file("img")->move("storage/publicite", $filename);
        } else {
            $filename= $request->img;
        };
        
        $saveAnnonce = Pub_annonce::find($publicite);
        $saveAnnonce->user_id = $request->user_id;
        $saveAnnonce->img = $filename;
        $saveAnnonce->type = $request->type;
        $saveAnnonce->status = $request->status;
        $saveAnnonce->alttext = $request->alttext;
        $saveAnnonce->siteweb = $request->siteweb;
        $saveAnnonce->save();

        return response()->json($saveAnnonce);
    }
    public function magazine(Request $request, $magazine)
    {

        if($request->hasFile("image")){
            $time = time(); 
            $filename= "magazine_".$request->user_id."-".$time.".jpg";
            $file = $request->file("image")->move("storage/publicite", $filename);
        } else {
            $filename= $request->image;
        };
        
        $saveMagazine = Pub_magazine::find($magazine);
        $saveMagazine->user_id = $request->user_id;
        $saveMagazine->nom = $request->nom;
        $saveMagazine->image = $filename;
        $saveMagazine->editeur = $request->editeur;
        $saveMagazine->prix = $request->prix;
        $saveMagazine->periode_start = $request->periode_start;
        $saveMagazine->periode_end = $request->periode_end;
        $saveMagazine->alttext = $request->alttext;
        $saveMagazine->siteweb = $request->siteweb;
        $saveMagazine->save();

        return response()->json($saveMagazine);
    }
}
