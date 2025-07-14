import { ProjectCard } from "./ProjectsCard";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isWhiteText?: boolean;
  hasBottomImage?: boolean;
  bottomImageUrl?: string;
  bottomImageAspect?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Boer Funding",
    description: "Management and CRM platform",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/433102d2ca2a4e4793d38efcc106433f/0a326a98cfb74b255e47bebddfe7ae896ab6d136?placeholderIfAbsent=true",
    isWhiteText: true,
  },
  {
    id: "2",
    title: "AMC Courier",
    description: "Courier Payroll Management Systems",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/433102d2ca2a4e4793d38efcc106433f/451ca5b624b32bddeca4700ffd961201eb14eac4?placeholderIfAbsent=true",
    isWhiteText: false,
  },
  {
    id: "3",
    title: "Relix",
    description: "Farm Management SaaS Dashboard",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/433102d2ca2a4e4793d38efcc106433f/cb76bd150b36771784271e8e28b71df8126b4e0c?placeholderIfAbsent=true",
    isWhiteText: false,
    hasBottomImage: true,
    bottomImageUrl:
      "https://cdn.builder.io/api/v1/image/assets/433102d2ca2a4e4793d38efcc106433f/7ed5367de286c7f1082725ea3a04d01829db2535?placeholderIfAbsent=true",
    bottomImageAspect: "aspect-[1.22]",
  },
  {
    id: "4",
    title: "WeLove",
    description: "Hotel Management App",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/433102d2ca2a4e4793d38efcc106433f/561c30b8b9cbc4e06f777f7410b7426334b1b3ce?placeholderIfAbsent=true",
    isWhiteText: false,
    hasBottomImage: true,
    bottomImageUrl:
      "https://cdn.builder.io/api/v1/image/assets/433102d2ca2a4e4793d38efcc106433f/e9a86ac60d06ea1fdecd7c5da80a638b5bc6dd3f?placeholderIfAbsent=true",
    bottomImageAspect: "aspect-[1.1]",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <main className="flex flex-col items-stretch pt-[49px] pb-[173px] max-md:pb-[100px]">
      <header className="text-[rgba(60,60,60,1)] font-normal gap-4 ml-[100px] max-md:max-w-full">
        <h1 className="text-8xl leading-none max-md:max-w-full max-md:text-[40px]">
          Our Projects
        </h1>
        <p className="text-xl leading-loose mt-4 max-md:max-w-full">
          A showcase of our finest work, where creativity meets functionality.
        </p>
      </header>

      <section className="w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <ProjectCard
              title={projects[0].title}
              description={projects[0].description}
              imageUrl={projects[0].imageUrl}
              isWhiteText={projects[0].isWhiteText}
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <ProjectCard
              title={projects[1].title}
              description={projects[1].description}
              imageUrl={projects[1].imageUrl}
              isWhiteText={projects[1].isWhiteText}
            />
          </div>
        </div>
      </section>

      <section className="w-full mt-[30px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <article className="flex flex-col relative min-h-[1021px] grow items-stretch text-[rgba(60,60,60,1)] pt-[100px] max-md:max-w-full max-md:mt-[30px]">
              <img
                src={projects[2].imageUrl}
                alt={`${projects[2].title} project showcase`}
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="relative self-center flex w-[479px] max-w-full flex-col items-stretch">
                <header className="min-h-[104px] w-full max-md:max-w-full">
                  <h2 className="text-5xl font-medium leading-[1.2] max-md:text-[40px]">
                    {projects[2].title}
                  </h2>
                  <p className="text-2xl font-normal mt-2 max-md:max-w-full">
                    {projects[2].description}
                  </p>
                </header>
                <button
                  className="border flex items-center gap-4 text-base font-normal mt-10 px-[30px] py-4 rounded-[60px] border-[rgba(60,60,60,1)] border-solid max-md:px-5 transition-all duration-300 hover:bg-opacity-10 hover:bg-current focus:outline-none focus:ring-2 focus:ring-current focus:ring-opacity-50"
                  aria-label={`Learn more about ${projects[2].title} project`}
                >
                  <span className="self-stretch my-auto">Learn more</span>
                </button>
              </div>
              {projects[2].hasBottomImage && (
                <img
                  src={projects[2].bottomImageUrl}
                  alt={`${projects[2].title} additional showcase`}
                  className={`${projects[2].bottomImageAspect} object-contain w-full mt-[142px] max-md:max-w-full max-md:mt-10`}
                />
              )}
            </article>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <article className="flex flex-col relative min-h-[1021px] grow items-stretch text-[rgba(60,60,60,1)] pt-[100px] max-md:max-w-full max-md:mt-[30px]">
              <img
                src={projects[3].imageUrl}
                alt={`${projects[3].title} project showcase`}
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="relative self-center flex w-[479px] max-w-full flex-col items-stretch">
                <header className="min-h-[104px] w-full max-md:max-w-full">
                  <h2 className="text-5xl font-medium leading-[1.2] max-md:text-[40px]">
                    {projects[3].title}
                  </h2>
                  <p className="text-2xl font-normal mt-2 max-md:max-w-full">
                    {projects[3].description}
                  </p>
                </header>
                <button
                  className="border flex items-center gap-4 text-base font-normal mt-10 px-[30px] py-4 rounded-[60px] border-[rgba(60,60,60,1)] border-solid max-md:px-5 transition-all duration-300 hover:bg-opacity-10 hover:bg-current focus:outline-none focus:ring-2 focus:ring-current focus:ring-opacity-50"
                  aria-label={`Learn more about ${projects[3].title} project`}
                >
                  <span className="self-stretch my-auto">Learn more</span>
                </button>
              </div>
              {projects[3].hasBottomImage && (
                <img
                  src={projects[3].bottomImageUrl}
                  alt={`${projects[3].title} additional showcase`}
                  className={`${projects[3].bottomImageAspect} object-contain w-full mt-[77px] max-md:max-w-full max-md:mt-10`}
                />
              )}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};
