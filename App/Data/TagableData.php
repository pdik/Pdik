<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class TagableData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $slug,
        public ?string $type,
        public ?int $order_column,
    ) {}
}
