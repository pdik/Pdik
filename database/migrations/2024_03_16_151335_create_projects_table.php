<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description')->nullable(false);
            $table->string('image')->nullable();
            $table->string('slug')->nullable();
            $table->json('data')->nullable(); // JSON data for the project
            $table->foreignId('owner')->constrained('users')->on('users')->references('id')->onDelete('cascade');
            $table->text('link')->nullable();
            $table->text('icon')->nullable();
            $table->boolean('complete')->default(0);
            $table->dateTime('started_at')->nullable();
            $table->dateTime('completed_at')->nullable();

            $table->boolean('private')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
