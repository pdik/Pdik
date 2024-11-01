declare namespace App.Data {
export type ProjectData = {
id: any | number;
name: string;
description: string;
owner: string;
link: string | null;
icon: string | null;
complete: boolean;
private: boolean;
data: Array<any>;
image: string;
created_at: string | any;
updated_at: string | any;
started_at: string | any;
completed_at: string | any;
tags: any | any;
};
export type ReviewData = {
id: any | number;
user: any;
title: string;
description: string;
rating: string;
created_at: string;
updated_at: string;
project: any;
};
}
