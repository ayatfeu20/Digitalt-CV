import { ProfessionalExperienceProject } from './professional-experience-project.model'

export class ProfessionalExperience {
    public company: string;
    public position: string;
    public from: Date;
    public to: Date;
    public projects: ProfessionalExperienceProject[];

    constructor(company: string, position: string, from: Date, to: Date, projects: ProfessionalExperienceProject[]) {
        this.company = company;
        this.position = position;
        this.from = from;
        this.to = to;
        this.projects = projects;
       
    }
}
