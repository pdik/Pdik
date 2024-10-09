<?php

namespace App\Filament\Pages;

use Filament\Panel;

class Dashboard extends \Filament\Pages\Dashboard
{
    public static $icon = 'heroicon-o-home';


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
