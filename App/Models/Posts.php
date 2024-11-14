<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use TomatoPHP\FilamentCms\Models\Post as PostBase;
class Posts extends PostBase
{
    use LogsActivity;


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly(['title', 'views','published_at','updated_at','likes']);
        // Chain fluent methods for configuration options
    }

    public function logView()
    {
        activity()
            ->performedOn($this)
            ->causedBy(auth()->user()) // Tracks which user viewed the post
            ->withProperties(['post_id' => $this->id])
            ->log('viewed');
    }
}
