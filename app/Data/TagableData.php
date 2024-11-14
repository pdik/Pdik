<?php

namespace App\Data;

use DateTime;
use Illuminate\Support\Carbon;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
use Spatie\Tags\Tag;

class TagableData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $slug,
        public ?string $type = null,
        public int $order_column = 0,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,

    ) {}

    public static function fromModel(Tag $tag): self
    {
        return new self(
            $tag->id,
            $tag->name,
            $tag->slug,
            $tag->type,
            $tag->order_column,
            $tag->created_at,
            $tag->updated_at,

        );
    }
}
