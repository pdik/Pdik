<?php

namespace App\Http\Controllers;

use App\Data\ProjectData;
use App\Models\Project;
use http\Client\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Project/Index',
            [
            ProjectData::collect(
                    Project::with(Project::PUBLIC_RELATIONSHIPS)->public()->get()
                ),
//                TimelineEventData::COLLECTION_NAME => fn() => TimelineEventData::collection(
//                    TimelineEvent::get()
//                ),

            ]
        );
    }
}
