<?php

namespace App\Data;

use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class MenuData extends Data
{
    public function __construct(
        public string $key,
        public string $location,
        public string $title,
        public ?Collection $items,
        public bool $activated,
    )
    {
    }
}
