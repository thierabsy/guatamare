<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PubliciteController extends Controller
{
    public function index()
    {
        $mydata1 = "Publicité";
        return response()->json($mydata1);
    }
}
