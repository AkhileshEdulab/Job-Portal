import { companyData } from "../Data/Company";
const AboutComp = () => {
  const company: { [key: string]: any } = companyData;

  return (
    <div className="flex flex-col gap-5">
      {Object.keys(company).map((key, index) => 
        key !== "Name" && (
          <div key={index}>
            <div className="text-xl mb-3 font-semibold">{key}</div>
  
            {key !== "Website" && key !== "Specialties" && (
              <div className="text-sm text-mine-shaft-300 text-justify">
                {company[key]}
              </div>
            )}

            {key === "Specialties" && (
              <div className="text-sm text-mine-shaft-300 text-justify">
                {company[key].map((item: string, index: number) => (
                  <span key={index}>{item}{index < company[key].length - 1 && ', '}</span>
                ))}
              </div>
            )}

            {key === "Website" && (
              <a
                href={company[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bright-sun-400"
              >
                {company[key]}
              </a>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default AboutComp;
