<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pub_profil;
use App\Pub_annonce;
use App\Pub_magazine;
use App\Pub_boutique;

class PubliciteController extends Controller
{
    public function index()
    {
        $mydata1 = "Publicité";
        return response()->json(["rep"=> $mydata1, "nb"=> 1]);
    }
    public function getpub()
    {
        $mypub = Pub_annonce::all();
        return response()->json(["pub" => $mypub]);
    }
    public function profil(Request $request) 
    {
        // dd($request->logo);

        if($request->hasFile("logo")){
            $filename= "pub_profil_".$request->user_id.".jpg";
            $file = $request->file("logo")->move("storage/publicite", $filename);
        } else {
            $filename= "pub_profil.jpg";
        };
        if($request->hasFile("catalogue")){
            $catalogue= "catalogue_".$request->user_id.".pdf";
            $file = $request->file("catalogue")->move("storage/publicite", $catalogue);
        } else {
            $filename= "pub_profil.jpg";
        };
        
        $saveProfil = new Pub_profil();
        $saveProfil->user_id = $request->user_id;
        $saveProfil->nom = $request->nom;
        $saveProfil->email = $request->email;
        $saveProfil->pays = $request->pays;
        $saveProfil->secteur = $request->secteur;
        $saveProfil->description = $request->description;
        $saveProfil->logo = $filename;
        $saveProfil->color = $request->color;
        $saveProfil->linkedin = $request->linkedin;
        $saveProfil->facebook = $request->facebook;
        $saveProfil->twitter = $request->twitter;
        $saveProfil->catalogue = $catalogue;
        $saveProfil->save();

        return response()->json($saveProfil);
    }

    public function annonce(Request $request)
    {

        if($request->hasFile("img")){
            $time = time(); 
            $filename= "annonce_".$request->user_id."-".$time.".jpg";
            $file = $request->file("img")->move("storage/publicite", $filename);
        } else {
            $filename= "annonce.jpg";
        };
        
        $saveAnnonce = new Pub_annonce();
        $saveAnnonce->user_id = $request->user_id;
        $saveAnnonce->img = $filename;
        $saveAnnonce->type = $request->type;
        $saveAnnonce->alttext = $request->alttext;
        $saveAnnonce->siteweb = $request->siteweb;
        $saveAnnonce->save();

        return response()->json($saveAnnonce);
    }

    public function magazine(Request $request)
    {

        if($request->hasFile("image")){
            $time = time(); 
            $filename= "magazine_".$request->user_id."-".$time.".jpg";
            $file = $request->file("image")->move("storage/publicite", $filename);
        } else {
            $filename= "magazine.jpg";
        };
        
        $saveMagazine = new Pub_magazine();
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

    public function boutique(Request $request)
    {

        if($request->hasFile("image1")){
            $time = time(); 
            $filename1= "boutique_1_".$request->user_id."-".$time.".jpg";
            $file = $request->file("image1")->move("storage/publicite", $filename1);
        } else {
            $filename= "no-image.jpg";
        };
        if($request->hasFile("image2")){
            $time = time(); 
            $filename2= "boutique_2_".$request->user_id."-".$time.".jpg";
            $file = $request->file("image2")->move("storage/publicite", $filename2);
        } else {
            $filename= "no-image.jpg";
        };
        if($request->hasFile("image3")){
            $time = time(); 
            $filename3= "boutique_3_".$request->user_id."-".$time.".jpg";
            $file = $request->file("image3")->move("storage/publicite", $filename3);
        } else {
            $filename= "no-image.jpg";
        };
        
        $saveBoutique = new Pub_boutique();
        $saveBoutique->user_id = $request->user_id;
        $saveBoutique->nom = $request->nom;
        $saveBoutique->image1 = $filename1;
        $saveBoutique->image2 = $filename2;
        $saveBoutique->image3 = $filename3;
        $saveBoutique->adresse = $request->adresse;
        $saveBoutique->ville = $request->ville;
        $saveBoutique->email = $request->email;
        $saveBoutique->telephone = $request->telephone;
        $saveBoutique->produits = $request->produits;
        $saveBoutique->save();

        return response()->json($saveBoutique);
    }
}