<?php

namespace App\Filament\Widgets;

use TomatoPHP\FilamentCms\Models\Post;
use Carbon\Carbon;
use Filament\Widgets\Concerns\InteractsWithPageFilters;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Number;

class StatsOverviewWidget extends BaseWidget
{
    use InteractsWithPageFilters;

    protected static ?int $sort = 0;

    protected function getStats(): array
    {
        // Parse start and end dates from filters
        $startDate = $this->filters['startDate'] ?? null ? Carbon::parse($this->filters['startDate']) : null;
        $endDate = $this->filters['endDate'] ?? null ? Carbon::parse($this->filters['endDate']) : now();

        // Query total post views, optionally filtering by date range
        $totalViews = Post::when($startDate, function ($query) use ($startDate, $endDate) {
            $query->whereBetween('created_at', [$startDate, $endDate]);
        })->sum('views');

        // Optionally format the numbers for display
        $formatNumber = function (int $number): string {
            if ($number < 1000) return (string) Number::format($number, 0);
            if ($number < 1000000) return Number::format($number / 1000, 2) . 'k';
            return Number::format($number / 1000000, 2) . 'm';
        };

        return [
            Stat::make('Total Post Views', $formatNumber($totalViews))
                ->description('Total views across posts')
                ->descriptionIcon('heroicon-m-eye')
                ->chart([10,20,30])
                ->color('primary'),

            // Add other stats as needed
        ];
    }
}
