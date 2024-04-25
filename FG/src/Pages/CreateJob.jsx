import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Navbar from '../components/Navbar'
import CreatableSelect from 'react-select/creatable';


const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data)

        fetch("http://localhost:3000/post-job", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error("Error:", error);
            });


    }

    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "Python", label: "Python" },
        { value: "Java", label: "Java" },
        { value: "C++", label: "C++" },
        { value: "Ruby", label: "Ruby" },
        { value: "Swift", label: "Swift" },
        { value: "PHP", label: "PHP" },
        { value: "HTML/CSS", label: "HTML/CSS" },
        { value: "SQL", label: "SQL" },
        { value: "R", label: "R" },
        { value: "Go", label: "Go" },
        { value: "Kotlin", label: "Kotlin" },
        { value: "TypeScript", label: "TypeScript" },
        { value: "C#", label: "C#" },
        { value: "Perl", label: "Perl" },
        { value: "Scala", label: "Scala" },
        { value: "Swift", label: "Swift" },
        { value: "Objective-C", label: "Objective-C" },
        { value: "Rust", label: "Rust" },
        { value: "MATLAB", label: "MATLAB" },
        { value: "Shell", label: "Shell" },
        { value: "Assembly", label: "Assembly" },
        { value: "Lua", label: "Lua" },
        { value: "Dart", label: "Dart" },
        { value: "Groovy", label: "Groovy" },
        { value: "Visual Basic", label: "Visual Basic" },
        { value: "Swift", label: "Swift" },
        { value: "Perl", label: "Perl" },
        { value: "Rust", label: "Rust" },
        { value: "Ruby on Rails", label: "Ruby on Rails" },
        { value: "Spring Boot", label: "Spring Boot" },
        { value: "Node.js", label: "Node.js" },
        { value: "Express.js", label: "Express.js" },
        { value: "React.js", label: "React.js" },
        { value: "Vue.js", label: "Vue.js" },
        { value: "Angular", label: "Angular" },
        { value: "jQuery", label: "jQuery" },
        { value: "Bootstrap", label: "Bootstrap" },
        { value: "Sass", label: "Sass" },
        { value: "Less", label: "Less" },
        { value: "Redux", label: "Redux" },
        { value: "GraphQL", label: "GraphQL" },
        { value: "RESTful API", label: "RESTful API" },
        { value: "Microservices", label: "Microservices" },
        { value: "Docker", label: "Docker" },
        { value: "Kubernetes", label: "Kubernetes" },
        { value: "AWS", label: "AWS" },
        { value: "Azure", label: "Azure" },
        { value: "Google Cloud Platform", label: "Google Cloud Platform" },
        { value: "Firebase", label: "Firebase" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "MySQL", label: "MySQL" },
        { value: "PostgreSQL", label: "PostgreSQL" },
        { value: "SQLite", label: "SQLite" },
        { value: "NoSQL", label: "NoSQL" },
        { value: "Redis", label: "Redis" },
        { value: "Elasticsearch", label: "Elasticsearch" },
        { value: "Linux", label: "Linux" },
        { value: "Unix", label: "Unix" },
        { value: "Windows", label: "Windows" },
        { value: "macOS", label: "macOS" },
        { value: "Git", label: "Git" },
        { value: "GitHub", label: "GitHub" },
        { value: "GitLab", label: "GitLab" },
        { value: "Bitbucket", label: "Bitbucket" },
        { value: "Jira", label: "Jira" },
        { value: "Confluence", label: "Confluence" },
        { value: "Trello", label: "Trello" },
        { value: "Slack", label: "Slack" },
        { value: "Zoom", label: "Zoom" },
        { value: "Microsoft Teams", label: "Microsoft Teams" },
        { value: "Web Development", label: "Web Development" },
        { value: "Mobile Development", label: "Mobile Development" },
        { value: "Software Engineering", label: "Software Engineering" },
        { value: "Data Science", label: "Data Science" },
        { value: "Machine Learning", label: "Machine Learning" },
        { value: "Artificial Intelligence", label: "Artificial Intelligence" },
        { value: "Blockchain", label: "Blockchain" },
        { value: "Cybersecurity", label: "Cybersecurity" },
        { value: "DevOps", label: "DevOps" },
        { value: "Agile Methodology", label: "Agile Methodology" },
        { value: "Scrum", label: "Scrum" },
        { value: "Kanban", label: "Kanban" },
        { value: "Test-Driven Development (TDD)", label: "Test-Driven Development (TDD)" },
        { value: "Behavior-Driven Development (BDD)", label: "Behavior-Driven Development (BDD)" },
        { value: "Continuous Integration (CI)", label: "Continuous Integration (CI)" },
        { value: "Continuous Deployment (CD)", label: "Continuous Deployment (CD)" },
        { value: "Code Review", label: "Code Review" },
        { value: "Technical Documentation", label: "Technical Documentation" },
        { value: "Problem Solving", label: "Problem Solving" },
        { value: "Critical Thinking", label: "Critical Thinking" },
        { value: "Creativity", label: "Creativity" }];

    // Adding skills for an agriculturist
    options.push(
        { value: "Crop Management", label: "Crop Management" },
        { value: "Soil Analysis", label: "Soil Analysis" },
        { value: "Pest Control", label: "Pest Control" },
        { value: "Irrigation Systems", label: "Irrigation Systems" }
    );




    return (
        <div>
            <Navbar />
            <div className=' max-w-screen-2x1 mt-5 container mx-auto xl:px-24 px-24'>

                {/**forms */}
                <div className='bg-[#b3d39a] py-10 px-4 lg:px-16'>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                        {/**1st row */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>
                                    Job Title
                                </label>
                                <input type='text' placeholder="Animal caretaker"
                                    {...register("jobTitle")} className='create-job-input' />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>
                                    Company Name
                                </label>
                                <input type='text' placeholder='Ex: Farm Guardian'
                                    {...register("companyName")} className='create-job-input' />
                            </div>

                        </div>

                        {/**2nd row */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Minimum Salary
                                </label>
                                <input type='text' placeholder="$20k"
                                    {...register("minPrice")} className='create-job-input' />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Maximum Salary
                                </label>
                                <input type='text' placeholder="$120k"
                                    {...register("maxPrice")} className='create-job-input' />
                            </div>

                        </div>

                        {/**3rd row */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Salary Type</label>

                                <select {...register("salaryType")} className='create-job-input'>
                                    <option value="">n/a</option>
                                    <option value="Hourly">Hourly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Annually">Yearly</option>
                                </select>
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Job Location    </label>
                                <input type='text' placeholder="ex: Cape Town"
                                    {...register("jobLocation")} className='create-job-input' />
                            </div>

                        </div>

                        {/**4th row */}

                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Job Posting Date    </label>

                                <input type='date' placeholder="ex: 2023-10-05"
                                    {...register("postingDate")} className='create-job-input' />
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Experience </label>

                                <select {...register("experienceLevel")} className='create-job-input'>
                                    <option value="">n/a</option>
                                    <option value="internship">Intership</option>
                                    <option value="Any Experience">Any experience</option>
                                    <option value="Annually">Work remotely</option>
                                </select>
                            </div>


                        </div>

                        {/**5th row */}
                        <div>

                            <label className='block  mb-2 text-lg'>
                                Required Skill Set    </label>
                            <CreatableSelect
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                isMulti
                                className='create-job-input py-4' />

                        </div>

                        {/**6th row */}

                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Company Logo    </label>

                                <input type='url' placeholder="Paste Company logo Url  https://www.fg.com/img1"
                                    {...register("companyLogo")} className='create-job-input' />
                            </div>

                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Employement Type </label>

                                <select {...register("experienceLevel")} className='create-job-input'>
                                    <option value="">n/a</option>
                                    <option value="Full time">Full-time</option>
                                    <option value="Part Time">Part-time</option>
                                    <option value="Temporary">Temporary</option>
                                </select>
                            </div>


                        </div>


                        {/**7th row */}

                        <div className=' w-full'>

                            <label className='block  mb-2 text-lg'>
                                Job Descriptions    </label>
                            <textarea className=' w-full pl-3 py-1.5 focus:outline-none '
                                rows={6}
                                placeholder='Job Description'
                                {...register("description")} />

                        </div>

                        {/**last row */}

                        <div>
                            <label className='block mb-2 text-lg'> Job posted by
                                <input type='email' placeholder="exmple@mail.com"
                                    {...register("PostedBy")} className='create-job-input ' />

                            </label>
                        </div>



                        <input type="submit" className='block mt-12 bg-[#3a643a] text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CreateJob