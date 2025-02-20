import { useEffect, useState } from "react";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://67b4bf90a9acbdb38ed03d7c.mockapi.io/api/v1/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched jobs:", data); // Debugging
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received");
        }
        const formattedJobs = data.map((job) => ({
          ...job,
          description:
            typeof job.description === "object"
              ? JSON.stringify(job.description)
              : job.description,
          requirements: Array.isArray(job.requirements)
            ? job.requirements
            : typeof job.requirements === "object"
            ? [JSON.stringify(job.requirements)]
            : [],
        }));
        setJobs(formattedJobs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setIsLoading(false);
      });
  }, []);

  return { jobs, isLoading, selectedJob, setSelectedJob };
};

export default useJobs; // ✅ Perbaiki ekspor default
