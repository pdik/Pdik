<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\SpatieTagsInput;
use Filament\Forms\Form;
use Filament\Infolists\Components\SpatieTagsEntry;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\SpatieTagsColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Spatie\Tags\Tag;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                    Section::make('Project Information')
                        ->description('Basic information about the project')
                        ->schema([
                            Components\TextInput::make('name')
                                ->label(__('fields.name'))
                                ->string()
                                ->helperText('The project name'),

                            Components\MarkdownEditor::make('description')
                                ->label(__('fields.description')),
                            Components\FileUpload::make('image')
                                ->image()
                                ->imageEditor()
                                ->disk('local')
                                ->directory('projects')
                                ->visibility('public')
                                ->label(__('fields.image')),
                            Components\TextInput::make('link')
                                ->label(__('fields.link'))
                                ->url(),
                        ])
                        ->columnSpan(1),
                    Section::make('Meta Information')
                        ->description('Additional information about the project')
                        ->schema([
                            SpatieTagsInput::make('tags')->type('project'),
                            Components\DatePicker::make('started_at'),
                            Components\Toggle::make('complete')
                                ->label(__('fields.complete')),
                            Components\Toggle::make('private')
                                ->label(__('fields.private')),
                            Components\KeyValue::make('data')->label(__('fields.data')),
                        ])  ->columnSpan(1),


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('description'),
                Tables\Columns\ImageColumn::make('image')
                    ->disk('local')->width(150)->height(150),
                SpatieTagsColumn::make('tags')->type('project'),
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
