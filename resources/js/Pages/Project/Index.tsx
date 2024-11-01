import {Head, usePage} from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";

import ProjectData = App.Data.ProjectData;
import moment from "moment";
import Fade from "@/Components/Slider/Fade";
import CaseSlide from "@/Components/Slider/CaseSlide";
const IndexProjects = ()=>{
    const {projects} = usePage<{
        projects: Array<ProjectData>;
    }>().props;
    return (<div>
        <Head title="Projecten"/>
        <div className="">
            <Fade<ProjectData> title={"Cases"} content={projects} slide={CaseSlide}  />
        </div>

    </div>);
}


// @ts-ignore
IndexProjects.layout = page => <Guest children={page}/>
export default IndexProjects;
