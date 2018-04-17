<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pub_profil;

class PubliciteController extends Controller
{
    public function index()
    {
        $mydata1 = "Publicité";
        return response()->json(["rep"=> $mydata1, "nb"=> 1]);
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
}
