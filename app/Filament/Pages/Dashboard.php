<?php

namespace App\Filament\Pages;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Pages\Dashboard as BaseDashboard;

class Dashboard extends BaseDashboard
{
    public static $icon = 'heroicon-o-home';
    use BaseDashboard\Concerns\HasFiltersForm;
    public function filtersForm(Form $form): Form
    {
        return $form
            ->schema([
                Section::make()
                    ->schema([
//                        Select::make('posts')
//                            ->placeholder('All Posts')
//                            ->options([
//                                'all' => 'All Posts',
//                                'published' => 'Published',
//                                'draft' => 'Draft',
//                            ]),
                        DatePicker::make('startDate')
                            ->maxDate(fn (Get $get) => $get('endDate') ?: now()),
                        DatePicker::make('endDate')
                            ->minDate(fn (Get $get) => $get('startDate') ?: now())
                            ->maxDate(now()),
                    ])
                    ->columns(3),
            ]);
    }

    public function canSee($request)
    {
        return $request->user()->can('accessFilament');
    }


    public function panel(Panel $panel): Panel
    {
        return $panel
            ->title('Test')
            ->pages([]);
    }
}
