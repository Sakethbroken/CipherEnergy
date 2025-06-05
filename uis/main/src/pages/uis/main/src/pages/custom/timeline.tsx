import { useState } from "react";

const Htimeline = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-6">
      {Array.from({ length: steps }, (_, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        return (
          <div key={step} className="flex items-center cursor-pointer" onClick={() => setCurrentStep(step)}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${isActive ? "bg-black text-white" : "bg-white text-gray-500 border border-gray-300"}`}
            >
              {step}
            </div>
            {step !== steps && <div className="w-8 h-[2px] bg-gray-300 mx-2"></div>}
          </div>
        );
      })}
    </div>
  );
};

const StepContent = ({ step, formData, setFormData }) => {
  const handleSelection = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderContent = () => {
    const baseBoxClass =
  "border rounded-lg p-6 cursor-pointer w-full h-[140px] text-white flex items-center justify-center text-center";


    const gridWrapperClass =
      "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto";

    switch (step) {
      case 1:
        return (
          <div className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Select motor model</h2>
            <div className={gridWrapperClass}>
              {Array.from({ length: 6 }, (_, i) => {
                const val = `CEM ${i + 1}`;
                return (
                  <div
                    key={i}
                    onClick={() => handleSelection("motorModel", val)}
                    className={`${baseBoxClass} ${
                      formData.motorModel === val
                        ? "border-white bg-gray-700"
                        : "border-gray-400"
                    }`}
                  >
                    <p className="text-sm font-medium text-left">{val}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Select Mounting Options</h2>
            <div className={gridWrapperClass}>
              {[
                "Wall Mounted",
                "Base Mounted",
                "Ceiling Mounted",
                "Pole Mounted",
                "Floor Mounted",
                "Bracket Mounted",
              ].map((val, i) => (
                <div
                  key={i}
                  onClick={() => handleSelection("mountingOption", val)}
                  className={`${baseBoxClass} ${
                    formData.mountingOption === val
                      ? "border-white bg-gray-700"
                      : "border-gray-400"
                  }`}
                >
                  <p className="text-sm font-medium text-left">{val}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Add Cooling System Preferences</h2>
            <div className={gridWrapperClass}>
              {["None", "Fan", "Water Cooled", "Oil Cooled", "Natural Air", "Forced Air"].map(
                (val, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelection("coolingPreference", val)}
                    className={`${baseBoxClass} ${
                      formData.coolingPreference === val
                        ? "border-white bg-gray-700"
                        : "border-gray-400"
                    }`}
                  >
                    <p className="text-sm font-medium text-left">{val}</p>
                  </div>
                )
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Configure electrical connections</h2>
            <div className={gridWrapperClass}>
              {[
                "Single Phase",
                "Three Phase",
                "Three Phase Customized",
                "Dual Power",
                "Neutral",
                "Earth",
              ].map((val, i) => (
                <div
                  key={i}
                  onClick={() => handleSelection("electricalConnection", val)}
                  className={`${baseBoxClass} ${
                    formData.electricalConnection === val
                      ? "border-white bg-gray-700"
                      : "border-gray-400"
                  }`}
                >
                  <p className="text-sm font-medium text-left">{val}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col md:flex-row items-start gap-8 justify-center max-w-6xl mx-auto p-4 text-white">
            <div className="bg-transparent rounded-xl p-6 w-full md:w-1/2 shadow-md border border-white">
              <h3 className="font-semibold text-lg mb-4">
                Our representative will contact you within 24hrs
              </h3>
              <form className="space-y-4">
                {["name", "email", "mobile", "company"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm mb-1 capitalize text-white">{field}</label>
                    <input
                      type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                      name={field}
                      placeholder={`Your ${field}`}
                      value={formData[field] || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-transparent text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                ))}
              </form>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-white">Your configuration is ready!</h3>
              <ul className="text-sm space-y-2 mb-4 text-white">
                <li>
                  1. Motor: <span className="font-medium">{formData.motorModel}</span>
                </li>
                <li>
                  2. Mounting option: <span className="font-medium">{formData.mountingOption}</span>
                </li>
                <li>
                  3. Cooling preference: <span className="font-medium">{formData.coolingPreference}</span>
                </li>
                <li>
                  4. Electrical connection: <span className="font-medium">{formData.electricalConnection}</span>
                </li>
              </ul>
              <p className="text-sm text-white">We will send the configuration detail to you</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="text-center text-white">{renderContent()}</div>;
};

const ParentComponent1 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [submissionComplete, setSubmissionComplete] = useState(false);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Submitted JSON:", formData);
      setSubmissionComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-8 bg-transparent min-h-screen">
      {submissionComplete ? (
        <div className="flex flex-col justify-center items-center text-center text-[#4CAF50]">
          <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" />
            <path
              d="M8 12l2 2l4-4"
              stroke="#4CAF50"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Congratulations! Your request has been sent for following configuration
          </h2>
          <ul className="text-base text-white space-y-1 mt-4">
            <li>
              1. Motor: <strong>{formData.motorModel}</strong>
            </li>
            <li>
              2. Mounting option: <strong>{formData.mountingOption}</strong>
            </li>
            <li>
              3. Cooling system preferences: <strong>{formData.coolingPreference}</strong>
            </li>
            <li>
              4. Electrical Connection: <strong>{formData.electricalConnection}</strong>
            </li>
          </ul>
          <button
            onClick={() => {
              setFormData({});
              setCurrentStep(1);
              setSubmissionComplete(false);
            }}
            className="text-sm h-[40px] w-[128px] font-semibold mt-5 px-3 rounded-md border border-transparent hover:opacity-30
                [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1]
                [border-image-slice:1] text-transparent bg-clip-text
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] via-[#074FF7] to-[#020919]"
          >
            START OVER
          </button>
        </div>
      ) : (
        <>
          <Htimeline steps={5} currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <StepContent step={currentStep} formData={formData} setFormData={setFormData} />
          <div className="flex justify-center gap-5 max-w-3xl mx-auto mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="text-sm h-[40px] w-[128px] font-semibold px-3 rounded-md border border-transparent hover:opacity-30
                [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1]
                [border-image-slice:1] text-transparent bg-clip-text
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] via-[#074FF7] to-[#020919]"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="text-white text-sm font-semibold w-[128px] h-[40px] rounded-sm
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
                hover:opacity-30 transition"
            >
              {currentStep === 5 ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ParentComponent1;
