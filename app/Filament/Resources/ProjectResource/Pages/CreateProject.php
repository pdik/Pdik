<?php

namespace App\Filament\Resources\ProjectResource\Pages;

use App\Filament\Resources\ProjectResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateProject extends CreateRecord
{
    protected static string $resource = ProjectResource::class;


    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['owner'] = auth()->id();
        $data['slug'] = \Str::slug($data['name']);

        if(isset($data['complete']) && $data['complete'] === 1){
            $data['completed_at'] = now();
        }
        return $data;
    }

}
