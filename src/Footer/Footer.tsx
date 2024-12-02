import {IconBrandFacebook,IconBrandTwitter,IconBrandLinkedin,IconBrandInstagram,IconAnchor,
} from '@tabler/icons-react';
import { footerLinks } from '../Data/Data';
import { useLocation } from 'react-router-dom';


const Footer = () => {
  const location = useLocation();
  return  location.pathname !=="/sign-up" && location.pathname !=="/login" ? 
    <footer className="bg-mine-shaft-950 text-white py-10 border-t border-gray-600 ">
      <div className="container mx-auto px-4  ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1 ml-5">
            <div className="flex items-center gap-2 mb-4 ">
              <IconAnchor size={24} stroke={2.5} />
              <span className="text-xl sm:text-2xl text-bright-sun-300 font-bold">Job Hook</span>
            </div>
            <p className="text-xl text-gray-300 mb-4">
              We are dedicated to connecting talented individuals with the best opportunities.
             Stay connected with us for updates and new job postings.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-bright-sun-400 transition"
              >
                <IconBrandFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-bright-sun-400 transition"
              >
                <IconBrandTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-bright-sun-400 transition"
              >
                <IconBrandLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-bright-sun-400 transition"
              >
                <IconBrandInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="flex gap-20 px-5">
  {footerLinks.map((list, index) => (
    <div key={index}>
      <h3 className="text-3xl font-bold text-bright-sun-400 mb-4">{list.title}</h3>
      <ul className="space-y-2">
        {list.links.map((link, idx) => (
          <li key={idx} className="flex cursor-pointer hover:translate-x-2 hover:text-bright-sun-400 transtion duration-300 ease-in">
              {link}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>:<></>
}

export default Footer;
