<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuteurProfilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auteur_profils', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id');
            $table->string('nom');
            $table->string('email');
            $table->string('pays');
            $table->string('fonction');
            $table->string('bio');
            $table->string('avatar');
            $table->string('color');
            $table->string('facebook');
            $table->string('linkedin');
            $table->string('twitter');
            $table->string('cv');
            $table->boolean('slider')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('auteur_profils');
    }
}
