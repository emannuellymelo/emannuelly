import React from 'react';
import { ProjectData } from "../../data/projects";
import ProjectCard from '../projects/project-card';
import "./projects.css";
import Separator from '../../common/separator/index';

function Projects() {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) =>{
                return <ProjectCard project={project}/>;
                })}
            </div>
        </div>
    );
}

export default Projects;
