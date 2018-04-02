<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $mydata1 = "Admin";
        return response()->json($mydata1);
    }
}
