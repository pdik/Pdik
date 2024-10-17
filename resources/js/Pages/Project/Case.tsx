import {Head} from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
const CaseProject = ()=>{
    return (<div>
        <Head title="Projecten" />

    </div>);
}


// @ts-ignore
CaseProject.layout = page => <Guest children={page}/>
export default CaseProject;
