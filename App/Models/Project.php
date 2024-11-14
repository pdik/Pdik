<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Tags\HasTags;

class Project extends Model
{
    use LogsActivity;
    use HasFactory;
    use HasTags;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'owner',
        'complete',
        'completed_at',
        'started_at',
        'data',
        'private',
        'link',
        'icon',
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly(['completed_at', 'started_at','name','description']);
    }
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'started_at' => 'date',
        'complete' => 'boolean',
        'completed_at' => 'date',
        'data' => 'array',
    ];

    public function scopePublic(Builder $query): Builder
    {
        return $query->where('private', 0)->latest();
    }
}
