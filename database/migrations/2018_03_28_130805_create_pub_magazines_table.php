<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePubMagazinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pub_magazines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user-id');
            $table->string('image');
            $table->string('nom');
            $table->string('editeur');
            $table->string('prix');
            $table->date('periode_start');
            $table->date('periode_end');
            $table->string('alttext');
            $table->string('siteweb');
            $table->string('status');
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
        Schema::dropIfExists('pub_magazines');
    }
}
