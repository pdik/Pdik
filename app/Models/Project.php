<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Tags\HasTags;

class Project extends Model
{
    use HasFactory;
    use HasTags;

    public const PUBLIC_RELATIONSHIPS = ['tags.taggable'];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function scopePublic(Builder $query): Builder
    {
        return $query->where('private', 0)->with('tags')->latest();
    }
}
