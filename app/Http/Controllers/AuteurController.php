<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Auteur_profil;
use App\Article;

class AuteurController extends Controller
{
    public function index()
    {
        $mydata1 = "Auteur";
        return response()->json($mydata1);
    }

    public function profil(Request $request)
    {
        // dd($request->logo);

        if($request->hasFile("avatar")){
            $filename= "auteur_profil_".$request->user_id.".jpg";
            $file = $request->file("avatar")->move("storage/auteur", $filename);
        } else {
            $filename= "pub_profil.jpg";
        };
        if($request->hasFile("cv")){
            $cvAuteur= "auteur_cv_".$request->user_id.".pdf";
            $file = $request->file("cv")->move("storage/auteur", $cvAuteur);
        } else {
            $filename= "no-image.jpg";
        };
        
        $saveProfil = new Auteur_profil();
        $saveProfil->user_id = $request->user_id;
        $saveProfil->nom = $request->nom;
        $saveProfil->email = $request->email;
        $saveProfil->pays = $request->pays;
        $saveProfil->fonction = $request->fonction;
        $saveProfil->bio = $request->bio;
        $saveProfil->avatar = $filename;
        $saveProfil->color = $request->color;
        $saveProfil->linkedin = $request->linkedin;
        $saveProfil->facebook = $request->facebook;
        $saveProfil->twitter = $request->twitter;
        $saveProfil->cv = $cvAuteur;
        $saveProfil->save();

        return response()->json($saveProfil);
    }

    public function article(Request $request)
    {

        if($request->hasFile("image")){
            $filename= "auteur_profil_".$request->user_id.".jpg";
            $file = $request->file("image")->move("storage/auteur", $filename);
        } else {
            $filename= "no-image.jpg";
        };
        
        $saveArticle = new Article();
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