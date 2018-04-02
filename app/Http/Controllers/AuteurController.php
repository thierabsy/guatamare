<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuteurController extends Controller
{
    public function index()
    {
        $mydata1 = "Auteur";
        return response()->json($mydata1);
    }
}
