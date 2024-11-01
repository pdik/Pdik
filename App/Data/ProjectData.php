<?php

namespace App\Data;

use App\Models\Project;
use DateTime;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
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
        public ?string $image,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
        public DateTime|Optional $started_at,
        public DateTime|Optional|null $completed_at,
        public Collection $tags,
    ) {}

    public static function fromModel(Project $project): self
    {

        return new self(
            $project->id,
            $project->name,
            $project->description,
            $project->owner,
            $project->link,
            $project->icon,
            $project->complete,
            $project->private,
            $project->data,
            $project->image != null ? Storage::drive('projects')->url($project->image) : null,
            $project->created_at,
            $project->updated_at,
            $project->started_at,
            $project->completed_at,
            TagableData::collect($project->tags),
        );
    }
    public static function rules(): array
    {
        return [
            'name' => 'required, string, min:3',
            'description' => 'required, string, min:3',
            'owner' =>'required, int exists:users,id',
        ];
    }
}
