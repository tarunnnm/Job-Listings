import React, { useState } from 'react';
import JobCard from './JobCard';
import FilterDropdown from './FilterDropdown';
import SearchBar from './SearchBar';
import './JobList.css';

const jobData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      type: "Full-Time",
      description: "Develop and maintain user-facing features for our web applications."
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Innovatech",
      location: "Remote",
      type: "Full-Time",
      description: "Design and implement server-side logic, ensuring application scalability and performance."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Austin, TX",
      type: "Part-Time",
      description: "Create intuitive and visually appealing interfaces for a variety of applications."
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Data Insights",
      location: "New York, NY",
      type: "Full-Time",
      description: "Analyze and interpret complex data sets to guide business decisions."
    },
    {
      id: 5,
      title: "Product Manager",
      company: "BuildIt",
      location: "Remote",
      type: "Full-Time",
      description: "Lead product development from ideation to launch in a collaborative environment."
    },
    {
      id: 6,
      title: "Mobile Developer",
      company: "Appify",
      location: "Miami, FL",
      type: "Part-Time",
      description: "Develop and optimize mobile applications for iOS and Android platforms."
    },
    {
      id: 7,
      title: "DevOps Engineer",
      company: "Cloud Solutions",
      location: "Seattle, WA",
      type: "Full-Time",
      description: "Implement and manage CI/CD pipelines, and maintain infrastructure for production."
    },
    {
      id: 8,
      title: "Graphic Designer",
      company: "Creative Labs",
      location: "Los Angeles, CA",
      type: "Remote",
      description: "Design graphics for social media, ads, and product packaging with creative flair."
    },
    {
      id: 9,
      title: "Software Engineer",
      company: "Tech Innovators",
      location: "Boston, MA",
      type: "Full-Time",
      description: "Work on core system architecture and implement robust software solutions."
    },
    {
      id: 10,
      title: "Marketing Specialist",
      company: "Bright Future",
      location: "Chicago, IL",
      type: "Part-Time",
      description: "Develop and execute marketing strategies to increase brand awareness and engagement."
    }
  
];

function JobList() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  
  const filteredJobs = jobData.filter(job => {
    const matchesFilter = filter ? job.type === filter : true;
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <FilterDropdown filter={filter} setFilter={setFilter} />
      <SearchBar search={search} setSearch={setSearch} />
      
      {filteredJobs.length ? (
        <div className="job-list">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className="no-jobs">No jobs found.</p>
      )}
    </div>
  );
}

export default JobList;
