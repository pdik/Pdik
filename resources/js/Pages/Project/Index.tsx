import {Head, usePage} from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

import Slider from "@/Components/Slider/Slider";
import ProjectData = App.Data.ProjectData;
import moment from "moment";
const IndexProjects = ()=>{
    const {projects} = usePage<{
        projects: Array<ProjectData>;
    }>().props;
    return (<div>
        <Head title="Projecten"/>
        <div className="px-6 xl:px-0 mx-auto container py-16">
            <Slider
                title={"Cases"}>
                {projects?.map((project: any) => (
                    <div about="slide">
                        <div className="relative h-96">
                            <img
                                className="absolute inset-0 object-cover object-center w-full h-full"
                                src={project.image}
                            />
                        </div>
                        <div className="py-6 border-b border-gray-200">
                            <h2 className="text-2xl text-darkBlue font-bold">{project.name}</h2>
                            <p className="py-3 text-sm text-gray-700 leading-7">{project.description}</p>
                            <p className="text-sm text-darkBlue">{moment(project.started_at).format("Y-M-d")} {project.completed_at ? " - " + moment(project.completed_at ).format("Y-M-d") : ""}</p>
                            <div className="pt-6">
                                <div
                                    className="flex justify-between w-full items-center text-gray-600 text-sm pl-2 pr-6">
                                    <div className="flex items-center">
                                        {project.tags?.map((tag: any) => (
                                            <div className="bg-darkBlue h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
                                                <span className="text-xs text-white dark:text-gray-100 font-normal">
                                                     {tag.name}
                                                </span>
                                            </div>
                                            ))}
                                    </div>
                                    <div className="flex items-center pl-2">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                                            </svg>

                                        </div>
                                        <a href={project.url} target="_blank" rel="noreferrer noopener"
                                           className="mx-auto mt-2 inline-block">View website</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    </div>);
}


// @ts-ignore
IndexProjects.layout = page => <Guest children={page}/>
export default IndexProjects;
