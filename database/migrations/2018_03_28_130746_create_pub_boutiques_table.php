<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePubBoutiquesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pub_boutiques', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id')->default('A007');
            $table->string('nom');
            $table->string('adresse');
            $table->string('ville');
            $table->string('email');
            $table->string('telephone');
            $table->string('produits');
            $table->string('image1');
            $table->string('image2');
            $table->string('image3');
            $table->string('status')->default('inactive');
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
        Schema::dropIfExists('pub_boutiques');
    }
}
