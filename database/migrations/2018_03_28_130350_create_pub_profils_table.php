<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePubProfilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pub_profils', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id');
            $table->string('nom');
            $table->string('email');
            $table->string('pays');
            $table->string('secteur');
            $table->text('description');
            $table->string('logo');
            $table->string('color');
            $table->json('reseaux');
            $table->string('catalogue');
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
        Schema::dropIfExists('pub_profils');
    }
}
