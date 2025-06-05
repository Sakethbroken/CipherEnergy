import React, { useState } from "react";

// Define the shape of the form data matching your backend
interface FormData {
  motor_model?: string;
  mounting_options?: string;
  cooling_system?: string;
  electrical_connections?: string;
  name?: string;
  email?: string;
  mobile?: string;
  company?: string;
}

const Htimeline = ({
  steps,
  currentStep,
}: {
  steps: number;
  currentStep: number;
}) => {
  return (
    <div className="flex flex-nowrap justify-center items-center gap-2 sm:gap-4 mb-6 px-2">
      {Array.from({ length: steps }, (_, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        return (
          <div key={step} className="flex items-center cursor-pointer">
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

type StepContentProps = {
  step: number;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const StepContent = ({ step, formData, setFormData }: StepContentProps) => {
  const handleSelection = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const baseBoxClass =
    "border rounded-lg p-6 cursor-pointer w-full sm:w-[280px] h-[140px] text-black flex items-center justify-center text-center";

const gridWrapperClass =
  "grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto";


  switch (step) {
    case 1:
      return (
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold mb-6">Select motor model</h2>
          <div className={gridWrapperClass}>
            {Array.from({ length: 6 }, (_, i) => {
              const val = `CEM ${i + 1}`;
              return (
                <div
                  key={i}
                  onClick={() => handleSelection("motor_model", val)}
                  className={`${baseBoxClass} ${
                    formData.motor_model === val ? "border-black bg-gray-100" : "border-gray-300"
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
          <h2 className="text-2xl font-bold mb-6">Select Mounting Options</h2>
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
                onClick={() => handleSelection("mounting_options", val)}
                className={`${baseBoxClass} ${
                  formData.mounting_options === val ? "border-black bg-gray-100" : "border-gray-300"
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
          <h2 className="text-2xl font-bold mb-6">Add Cooling System Preferences</h2>
          <div className={gridWrapperClass}>
            {[
              "None",
              "Fan",
              "Water Cooled",
              "Oil Cooled",
              "Natural Air",
              "Forced Air",
            ].map((val, i) => (
              <div
                key={i}
                onClick={() => handleSelection("cooling_system", val)}
                className={`${baseBoxClass} ${
                  formData.cooling_system === val ? "border-black bg-gray-100" : "border-gray-300"
                }`}
              >
                <p className="text-sm font-medium text-left">{val}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 4:
      return (
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold mb-6">Configure electrical connections</h2>
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
                onClick={() => handleSelection("electrical_connections", val)}
                className={`${baseBoxClass} ${
                  formData.electrical_connections === val ? "border-black bg-gray-100" : "border-gray-300"
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
        <div className="flex flex-col md:flex-row items-start gap-8 justify-center max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-xl p-6 w-full md:w-1/2 shadow-md">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">
              Our representative will contact you within 24hrs
            </h3>
            <form className="space-y-4">
              {["name", "email", "mobile", "company"].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-gray-700 mb-1 capitalize">{field}</label>
                  <input
                    type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                    name={field}
                    placeholder={`Your ${field}`}
                    value={formData[field as keyof FormData] || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              ))}
            </form>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Your configuration is ready!</h3>
            <ul className="text-sm space-y-2 mb-4 text-black">
              <li>
                1. Motor: <span className="font-medium">{formData.motor_model}</span>
              </li>
              <li>
                2. Mounting option: <span className="font-medium">{formData.mounting_options}</span>
              </li>
              <li>
                3. Cooling preference: <span className="font-medium">{formData.cooling_system}</span>
              </li>
              <li>
                4. Electrical connection: <span className="font-medium">{formData.electrical_connections}</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">We will send the configuration detail to you</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ParentComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleNext = async () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit to backend
      setLoading(true);
      setErrorMsg(null);
      try {
        // Prepare payload keys matching your backend keys
        const payload = {
          motor_model: formData.motor_model,
          mounting_options: formData.mounting_options,
          cooling_system: formData.cooling_system,
          electrical_connections: formData.electrical_connections,
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          company: formData.company,
        };

        const res = await fetch(
          "https://alobnq--api.brokenatomtest.digital/v1/fn/create-configuration",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await res.json();

        console.log("Response from backend:", data);
        if (!data.success) {
          console.error("Error from backend:", data);
          return
        }

        console.log("Submitted JSON:", data);
        setSubmissionComplete(true);
      } catch (error: any) {
        setErrorMsg(error.message || "Failed to submit, please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-8">
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
          <h2 className="text-2xl font-semibold mb-2">
            Congratulations! Your request has been sent for the following configuration
          </h2>
          <ul className="text-base text-black space-y-1 mt-4">
            <li>
              1. Motor: <strong>{formData.motor_model}</strong>
            </li>
            <li>
              2. Mounting option: <strong>{formData.mounting_options}</strong>
            </li>
            <li>
              3. Cooling system preferences: <strong>{formData.cooling_system}</strong>
            </li>
            <li>
              4. Electrical Connection: <strong>{formData.electrical_connections}</strong>
            </li>
          </ul>
          <button
            onClick={() => {
              setFormData({});
              setCurrentStep(1);
              setSubmissionComplete(false);
              setErrorMsg(null);
            }}
            className="text-sm h-[40px] cursor-pointer w-[128px] font-semibold mt-5 px-3 rounded-md border border-transparent hover:opacity-30
                [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1]
                [border-image-slice:1] text-transparent bg-clip-text
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] via-[#074FF7] to-[#020919]"
          >
            START OVER
          </button>
        </div>
      ) : (
        <>
          <Htimeline steps={5} currentStep={currentStep} />
          <StepContent step={currentStep} formData={formData} setFormData={setFormData} />
          {errorMsg && (
            <p className="text-red-600 text-center mt-4 font-semibold">{errorMsg}</p>
          )}
          <div className="flex justify-center gap-5 max-w-3xl mx-auto mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 1 || loading}
              className="text-sm h-[40px] w-[128px] cursor-pointer font-semibold px-3 rounded-md border border-transparent hover:opacity-30
                [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1]
                [border-image-slice:1] text-transparent bg-clip-text
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] via-[#074FF7] to-[#020919]"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={loading}
              className="text-white text-sm cursor-pointer font-semibold w-[128px] h-[40px] rounded-sm
    bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
    hover:opacity-30 transition"
            >
              {loading ? "Submitting..." : currentStep === 5 ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ParentComponent;
