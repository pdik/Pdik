<?php

namespace App\Http\Controllers;

use App\Data\ProjectData;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {

        return Inertia::render(
            'Project/Index',
            [
              'projects' =>   ProjectData::collect(Project::with('tags')->public()->get()),
            ]
        );
    }

    public function show(Project $project)
    {
        return Inertia::render(
            'Project/Show',
            [
                'project' => ProjectData::from($project),
            ]
        );
    }
}
