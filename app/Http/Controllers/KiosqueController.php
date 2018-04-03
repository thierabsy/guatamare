<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KiosqueController extends Controller
{
    public function index()
    {
        $mydata1 = "Kiosque";
        return response()->json($mydata1);
    }
}
