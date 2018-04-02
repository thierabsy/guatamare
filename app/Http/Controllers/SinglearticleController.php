<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglearticleController extends Controller
{
    public function index()
    {
        $mydata1 = "Single Article";
        return response()->json($mydata1);
    }
}
