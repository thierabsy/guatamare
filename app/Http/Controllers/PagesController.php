<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index()
    {
        $mydata1 = "Pages";
        return response()->json($mydata1);
    }
}
