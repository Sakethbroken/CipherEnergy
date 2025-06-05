import { useState } from "react";
import Mobilesidebar from "../mobilesidebar";
import Header from "../header";
import location from "../../assets/icons/location.png";
import india from "../../assets/icons/india.png";
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
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: ""
  });

  const contactInfo = {
    email: "hr@cipherenergy.com",
    phone: "+91 98765 43210",
    responseTime: "You would get a reply within 24 hours of sending a message."
  };

  const locations = [
    { title: "Headquarters", address: "Hyderabad, Telangana" },
    { title: "Manufacturing", address: "Bangalore, Karnataka" },
    { title: "R and D", address: "Pune, Maharashtra" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (submitSuccess || submitError) {
      setSubmitSuccess(false);
      setSubmitError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    setSubmitting(true);
<<<<<<< HEAD:uis/main/src/pages/contactus/contactus.tsx
    setTimeout(() => {
      setSubmitting(false);
=======
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('https://alobnq--api.brokenatomtest.digital/v1/fn/create-contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result?.m || 'Something went wrong while submitting');
      }

>>>>>>> f61bc6d (backend functionlity linked):contactus/contactus.tsx
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "",
        message: ""
      });
<<<<<<< HEAD:uis/main/src/pages/contactus/contactus.tsx
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
=======

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setSubmitError(err.message || 'Submission failed');
    } finally {
      setSubmitting(false);
    }
>>>>>>> f61bc6d (backend functionlity linked):contactus/contactus.tsx
  };

  return (
    <>
      <Header onHamburgerClick={() => setShowSidebar(prev => !prev)} />
      {showSidebar && <Mobilesidebar onClose={() => setShowSidebar(false)} />}

      <div className="bg-[#F4F4F4] flex flex-col py-10 justify-center text-center">
        <em className="playfair bg-gradient-to-r from-black to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center">
          Our Story
        </em>

        <div className="w-screen lg:w-[1300px] bg-white rounded-2xl mx-auto mt-10 flex flex-col-reverse lg:flex-row justify-center items-center gap-5">
          <div className="w-[340px] h-[162px] lg:h-[635px] flex flex-col justify-between my-5 rounded-2xl lg:rounded-none">
            <div className="text-start">{contactInfo.responseTime}</div>
            <div>
              <h1 className="text-start cursor-pointer hover:text-blue-600 transition">{contactInfo.email}</h1>
              <h1 className="text-start cursor-pointer hover:text-blue-600 transition">{contactInfo.phone}</h1>
            </div>
          </div>

          <div className="w-screen lg:w-[700px] h-[635px] px-5 py-7 bg-[#F4F4F4] rounded-2xl">
            <form className="space-y-7" onSubmit={handleSubmit}>
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  ✅ Thank you! Your message has been submitted successfully.
                </div>
              )}

              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  ❌ {submitError}
                </div>
              )}

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
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
                  className="w-full border border-gray-300 px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <option value="">Select interest</option>
                  <option value="product_inquiry">Product Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Support</option>
                  <option value="investment">Investment</option>
                  <option value="career">Career</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-start text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={submitting}
                  className="w-full border border-gray-300 bg-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="cursor-pointer text-white text-sm font-semibold w-[128px] px-10 h-[40px] rounded-sm
                bg-gradient-to-tr from-[#020919] via-[#074FF7] via-40% via-[#6384E9] to-[#020919]
                hover:opacity-80 transition disabled:opacity-50"
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

      <Footer1 />
    </>
  );
};

export default Contact;
