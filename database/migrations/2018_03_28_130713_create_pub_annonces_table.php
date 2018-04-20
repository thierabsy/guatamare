<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePubAnnoncesTable extends Migration
{
    /**
     * Run the migrations. 
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pub_annonces', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id');
            $table->string('type');
            $table->string('img');
            $table->string('alttext')->nullable();
            $table->string('siteweb')->nullable();
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
        Schema::dropIfExists('pub_annonces');
    }
}
