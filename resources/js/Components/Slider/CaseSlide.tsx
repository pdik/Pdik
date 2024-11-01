import moment from "moment/moment";
import ProjectData = App.Data.ProjectData;
import { router } from '@inertiajs/react'

export default function CaseSlide({data: data}: { data: ProjectData }) {

    return(
        <div key={"case_"+data.id}>
            <div>
                {data.image ? (<img src={data.image} alt="" className={"w-full h-96 object-cover"}/>) : (
                    <div className="w-full h-96 bg-gray-100">
                        <div className="flex justify-center items-center h-full">
                            <span className="text-4xl text-gray-400">No Image</span>
                        </div>
                    </div>
                    )}
            </div>
            <div className="px-y pt-7">
                <header className="date text-slate-600 font-bold ">
                    {moment(data.started_at).format("Y-M-d")} {data.completed_at ? " - " + moment(data.completed_at ).format("Y-M-d") : ""}
                </header>
                <div className="title ">
                    <h1 className="font-bold mt-10 ">{data.name}</h1>
                    <p>{data.description}</p>
                    <div className="flex items-center">
                        {data.tags?.map((tag: any) => (
                            <div className="bg-darkBlue h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
                                                                 <span className="text-xs text-white dark:text-gray-100 font-normal">
                                                                      {tag.name}
                                                                 </span>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="btn bg-primary p-[1rem_1.5rem] font-bold text-white mt-5" onChange={()=>{
                    router.get(`/cases/${data.id}`);
                }}>
                    Bekijk project
                </button>
            </div>
        </div>
    )
}
