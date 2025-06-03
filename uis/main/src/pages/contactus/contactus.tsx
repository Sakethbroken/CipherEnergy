import { useState, useEffect } from "react";
import Mobilesidebar from "../mobilesidebar";
import Header from "../header";
import location from "../../ASSETS/icons/location.png";
import india from "../../ASSETS/icons/india.png";
import Footer1 from "../footer";

function Cards({ title, address }) {
  return (
    <div className="flex flex-col gap-9 bg-[#8BECFF4D] rounded-md px-2 py-2 w-[340px] sm:w-[382px] hover:shadow-md transition">
      <div className="flex justify-between">
        <img src={location} alt="" className="w-[36px] h-[36px] rounded-full cursor-pointer" />
        <img src={india} alt="" className="w-[28px] h-[28px] rounded-full cursor-pointer" />
      </div>
      <h1 className="font-body text-black font-bold text-lg leading-none uppercase cursor-pointer">{title}</h1>
      <p className="font-body font-normal text-md leading-[27px] opacity-80 align-middle">
        {address || "[address here]"}
      </p>
      <button
        className="cursor-pointer text-xs sm:text-sm font-semibold w-[128px] h-[40px] rounded-sm 
          border border-transparent bg-white hover:opacity-30 transition 
          [border-image:linear-gradient(to_bottom,#020919,#074FF7,#6384E9,#074FF7,#020919)_1] 
          [border-image-slice:1] overflow-hidden
          text-transparent bg-clip-text 
          bg-gradient-to-tr from-[#020919] via-[#074FF7] via-[#6384E9] to-[#020919]">
        Explore Products
      </button>
    </div>
  );
}

const Contact = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    email: "hr@cipherenergy.com",
    phone: "+91 98765 43210",
    responseTime: "You would get a reply within 24 hours of sending a message."
  });
  const [locations, setLocations] = useState([
    { title: "Headquarters", address: "" },
    { title: "Manufacturing", address: "" },
    { title: "R and D", address: "" }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // API base URL from environment variable
 const API_URL = typeof process !== 'undefined' && process.env?.REACT_APP_API_URL 
    ? process.env.REACT_APP_API_URL 
    : 'alobnq--api.brokenatomtest.digital';
  const API_BASE = `https://${API_URL}`;


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: ""
  });

  // Fetch contact details from backend using your function-based API
  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch contact information using your API pattern
        const contactResponse = await fetch(`${API_BASE}/v1/fn/get-contactuss`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({})
        });

        if (!contactResponse.ok) {
          throw new Error(`HTTP error! status: ${contactResponse.status}`);
        }

        const contactResult = await contactResponse.json();
        
        if (contactResult.success && contactResult.data && contactResult.data.length > 0) {
          // Assuming the first contact record contains the general info
          const contactData = contactResult.data[0];
          setContactInfo({
            email: contactData.email || "hr@cipherenergy.com",
            phone: contactData.phone || "+91 98765 43210",
            responseTime: contactData.response_time || "You would get a reply within 24 hours of sending a message."
          });

          // If locations are stored in the same table or separate, adjust accordingly
          if (contactData.locations) {
            setLocations(contactData.locations);
          }
        }

      } catch (error) {
        console.error('Error fetching contact details:', error);
        setError('Failed to load contact information. Please try again later.');
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetails();
  }, [API_BASE]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear submit messages when user starts typing
    if (submitSuccess || submitError) {
      setSubmitSuccess(false);
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in all required fields (Name, Email, Message)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }

    try {
      setSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);

      // Structured console logging (keep existing functionality)
      console.log("📩 Submitted Contact Form:");
      console.log("Name:", formData.name);
      console.log("Email:", formData.email);
      console.log("Company:", formData.company);
      console.log("Interest:", formData.interest);
      console.log("Message:", formData.message);

      // Optional: JSON stringified log
      const jsonData = JSON.stringify(formData, null, 2);
      console.log("📄 JSON Output:\n", jsonData);

      // Submit form data to backend using your function-based API
      const response = await fetch(`${API_BASE}/v1/fn/create-contactus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          interest: formData.interest,
          message: formData.message.trim(),
          submitted_at: new Date().toISOString(),
          status: 'new'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to submit form');
      }

      console.log('✅ Form submitted successfully:', result);
      
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "",
        message: ""
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header onHamburgerClick={() => setShowSidebar(prev => !prev)} />
      {showSidebar && <Mobilesidebar onClose={() => setShowSidebar(false)} />}

      <div className="bg-[#F4F4F4] flex flex-col py-10 justify-center text-center">
        <em className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
          Our Story
        </em>

        <div className="w-screen lg:w-[1200px] bg-white rounded-2xl mx-auto mt-10 flex flex-col-reverse lg:flex-row justify-center items-center gap-5">
          <div className="w-[340px] h-[162px] lg:h-[635px] flex flex-col justify-between my-5 rounded-2xl lg:rounded-none">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-500">Loading contact information...</div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-red-500 text-sm">{error}</div>
              </div>
            ) : (
              <>
                <div className="text-start">{contactInfo.responseTime}</div>
                <div>
                  <h1 className="text-start cursor-pointer hover:text-blue-600 transition">
                    {contactInfo.email}
                  </h1>
                  <h1 className="text-start cursor-pointer hover:text-blue-600 transition">
                    {contactInfo.phone}
                  </h1>
                </div>
              </>
            )}
          </div>

          <div className="w-screen lg:w-[700px] h-[635px] px-5 py-7 bg-[#F4F4F4] rounded-2xl">
            <form className="space-y-7" onSubmit={handleSubmit}>
              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  ✅ Thank you! Your message has been submitted successfully. We'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  ❌ {submitError}
                </div>
              )}

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select interest</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Support">Support</option>
                  <option value="Investment">Investment</option>
                  <option value="Career">Career</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="cursor-pointer text-white text-sm font-semibold w-[128px] px-10 h-[40px] rounded-sm
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
                hover:opacity-80 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-10 mx-auto w-full lg:w-[1170px]">
          {locations.map((location, index) => (
            <Cards key={index} title={location.title} address={location.address} />
          ))}
        </div>
      </div>

      <Footer1/>
    </>
  );
};

export default Contact;