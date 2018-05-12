export class APIData {
    shots: Shot[];
    total_pages: number;
    current_page: number;
  }

export class Shot {
    constructor (
        public id: number,
        public title: string,
        public description: string,
        public link: string,
        public avatar: string,
        public thumbnail: string,
        public platforms: string,
        public avatar_content_type: string
    ) {}
}
