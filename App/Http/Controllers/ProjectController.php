<?php

namespace App\Http\Controllers;

use App\Data\ProjectData;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        //dd(Project::with('tags')->public()->get());
        return Inertia::render(
            'Project/Index',
            [
              'projects' =>   ProjectData::collect(Project::with('tags')->public()->get()),
            ]
        );
    }
}
