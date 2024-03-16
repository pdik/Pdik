import {User} from "@/types/index";

declare namespace App.Data {
export type ProjectData = {
id: any | number;
name: string;
description: string;
owner: string;
link: string;
icon: string;
complete: boolean;
private: boolean;
created_at: string | any;
updated_at: string | any;
tags: any | any;
};
export type ReviewData = {
id: any | number;
user: User;
title: string;
description: string;
rating: string;
created_at: string;
updated_at: string;
project: ProjectData;
};
}
