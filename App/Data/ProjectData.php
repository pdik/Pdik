<?php

namespace App\Data;

use DateTime;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Optional;
use Spatie\Tags\Tag;

/** @typescript */
class ProjectData extends Data
{
    public function __construct(
        public int|Optional $id,
        public string $name,
        public string $description,
        public string $owner,
        public ?string $link,
        public ?string $icon,
        public bool $complete,
        public bool $private,
        public array $data,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
        public DateTime|Optional $started_at,
        public DateTime|Optional $completed_at,
        #[DataCollectionOf(TagableData::class)]
        public DataCollection|Optional $tags,
    ) {}

    public static function rules(): array
    {
        return [
            'name' => 'required, string, min:3',
            'description' => 'required, string, min:3',
            'owner' =>'required, int exists:users,id',
        ];
    }
}
