export class Video {
    id: string;
    name: string;
    desc: string;
    url: string;

    constructor(id:string, name:string, desc:string, url:string ) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.url = url;
    }
}