import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Daftar Link */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { title: "Explores", links: ["Communities", "Recruiters", "Jobs", "Events", "Forum"] },
            { title: "Hire learning", links: ["Articles", "Guides", "Templates", "Reports", "Courses"] },
            { title: "Resources", links: ["Blog", "Podcast", "Content library"] },
            { title: "Product", links: ["Attarct", "Quality", "Hire", "Pricing", "Customers", "Partners"] },
            { title: "Support", links: ["Help center", "Developer API", "Status"] },
            { title: "For job seekers", links: ["Go Pro", "Code of conduct", "Financial statements", "Press release", "Prospectus"] },
            { title: "Integrations", links: ["Slack", "Xero", "1 Password", "Sage", "Netsuite"] },
            { title: "Solutions", links: ["Human resources", "Sales & marketing", "Financial", "Investor", "Revenue"] },
            { title: "Company", links: ["About", "User", "Teams", "Contact"] },
            { title: "Policies", links: ["Community guidelines", "Terms of use", "Privacy policy", "Legal", "Cookies"] },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              <ul className="mt-2 space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-500 hover:text-gray-900">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Informasi Perusahaan & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between md:items-center border-t pt-8 mt-8">
          {/* Informasi Perusahaan */}
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">PT.KITA BANTU</h3>
              <p className="text-gray-500 text-sm">The Ultimate for Pt.Kita Bantu</p>
              <p className="text-gray-500 text-sm">Jakarta, Indonesia</p>
              <p className="text-gray-500 text-sm">11420</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
            <p className="text-gray-500 text-sm">Subscribe to our newsletter to get the latest Jobstera news</p>
            <form className="mt-3 flex">
              <input
                type="email"
                placeholder="What's your work email?"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm border-t pt-6">
          <p>© 2025 PT.KITA BANTU. “KITA BANTU” and its logo are official registered trademarks of our the company. International transactions may be subject to a currency conversion fee. 
            Certain additional payment methods may include service or administrative charges. 
            Please refer to <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a></p>
          
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-blue-500 hover:underline">Instagram</a>
            <a href="#" className="text-blue-500 hover:underline">Twitter</a>
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
