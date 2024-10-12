<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Section::make('Project Information')
                            ->columns(1)
                            ->description('Basic information about the project')
                            ->schema([
                                Components\TextInput::make('slug')
                                    ->label(__('fields.slug')),
                                Components\TextInput::make('name')
                                    ->label(__('fields.name'))
                                    ->helperText('The project name'),

                                Components\MarkdownEditor::make('description')
                                    ->label(__('fields.description')),
                                Components\FileUpload::make('image')
                                    ->label(__('fields.image')),

                            ]),
                Section::make('Meta Information')
                    ->columns(1)
                            ->description('Basic information about the project')
                            ->schema([
                                Components\TagsInput::make('tags'),
                                Components\DateTimePicker::make('started_at'),
                                Components\KeyValue::make('data')->label(__('fields.data')),

                            ]),

                Section::make('Project Status')
                    ->description('Basic information about the project')
                    ->schema([
                        Components\Toggle::make('complete')
                            ->label(__('fields.complete')),
                        Components\Toggle::make('private')
                            ->label(__('fields.private')),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
