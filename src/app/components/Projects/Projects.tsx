import React from 'react'
import ProjectCard, { ProjectCardType } from './ProjectCard';

const projects: ProjectCardType[] = [
    {
        title: "NOAA Oil spill incident Analysis, Personal Project Fall 2023",
        description: "Implemented an automated ETL pipeline in Airflow with GPT-3 for 300+ oil spill incidents using Few-shot prompting, achieving 98% accuracy and 20% recall improvement on spill classification, integrated a user-friendly Gradio Interface. Employed K-means++ clustering and t-SNE visualization to unveil incident patterns, geographical and temporal clusters and created visualizations for real-time exploration of spill dynamics of past 25 years using Matplotlib and Seaborn.",

    },
    {
        title: "Blog Feedback Prediction, Class Project Spring 2023",
        description: "Trained and optimized an XGBOOST regression model on a Databricks ML cluster in Spark, achieving a 20% improvement in R2 score compared to baseline models. Developed a React.js dashboard including interactive charts and data tables, for visualizing predictions and facilitating efficient exploration of feedback trends across 37,000 Hungarian blog pages.",


    },
    {
        title: "Credit Card Fraud Detection, Class Project Fall 2022",
        description: "Ranked in the top 3 of a Kaggle competition by strategically addressing class imbalance with Conditional Variational Autoencoders using Keras, achieving a remarkable 98% recall and 93% f1 score.",

    }
];
function Projects() {
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 " style={{ opacity: 1 }}>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-[#a2f678]/10 scrollbar-thumb-[#00a359]/80 scrollbar">

                {
                    projects.map((project) => <ProjectCard imageUrl={project.imageUrl} title={project.title} description={project.description} logos={project.logos} key={project.title} />)

                }
            </div>
            <div className="w-full absolute top-[30%] bg-[#b9f1d6]/10 left-0 h-[500px] -skew-y-12"></div>
        </div>
    )
}

export default Projects