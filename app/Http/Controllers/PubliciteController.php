<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pub_profil;

class PubliciteController extends Controller
{
    public function index()
    {
        $mydata1 = "Publicité";
        return response()->json($mydata1);
    }
    public function profil()
    {
        $saveProfil = new Pub_profil();
        $saveProfil["user_id"] = "xc5";
        $saveProfil["nom"] = "Oumare DIOUME";
        $saveProfil["email"] = "dioume@gta.net";
        $saveProfil["pays"] = "Senegal";
        $saveProfil["secteur"] = "Communication";
        $saveProfil["description"] = "DESC";
        $saveProfil["logo"] = "DESC";
        $saveProfil["color"] = "DESC";
        $saveProfil["reseaux"] = "DESC";
        $saveProfil["catalogue"] = "DESC";
        $saveProfil->save();

        return response()->json($saveProfil);
    }
}
