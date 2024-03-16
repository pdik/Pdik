<?php

namespace App\Data;


use App\Models\Project;
use App\Models\User;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
/** @typescript */
class ReviewData extends Data
{
    public function __construct(
        public int|Optional $id,
        public User $user,
        public string $title,
        public string $description,
        public string $rating,
        public string $created_at,
        public string $updated_at,
        public Project $project
    ) {}
}
