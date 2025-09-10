import { workplaceData } from "../data/workplaceData";

export const Workplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          My Workplace
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
          Where I work, who I work with, and the technologies that power our
          products.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {workplaceData.company.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {workplaceData.company.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-700 dark:text-gray-300 mb-2">
            <span>Industry: {workplaceData.company.industry}</span>
            <span>Size: {workplaceData.company.size}</span>
            <span>Founded: {workplaceData.company.founded}</span>
            <a
              className="underline text-primary-700 dark:text-primary-400"
              href={workplaceData.company.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              Website
            </a>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            My Role
          </h2>
          <div className="font-semibold text-primary-700 dark:text-primary-400 text-base mb-1">
            {workplaceData.position.title}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {workplaceData.position.department}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Since{" "}
            {new Date(workplaceData.position.startDate).toLocaleDateString(
              "en-US",
              {
                month: "long",
                year: "numeric",
              }
            )}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            {workplaceData.position.location}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            My Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workplaceData.team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center"
              >
                <img
                  alt={member.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                  src={member.image}
                />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {workplaceData.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workplaceData.currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {project.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">
                  {project.status}
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  {project.description}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.teamSize} team members
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
