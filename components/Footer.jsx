import Link from 'next/link';

import { BsGithub, BsSlack, BsTwitter } from 'react-icons/bs';
const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'GitHub', href: '#' },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] px-4 bg-[#0C0C0D] text-white text-sm">
    <div className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex cursor-pointer items-center text-grey transition-colors duration-500 hover:text-gray-500">
            <p className="font-semibold">Learnify - Designed worldwide</p>
          </div>
          <div className="mt-auto flex items-center space-x-4 pl-1 ">
            <Link
              href="https://twitter.com/lastmubasshir"
              className=" flex text-grey"
            >
              <BsSlack className="transition-colors duration-300 hover:text-gray-400" />
            </Link>
            <Link
              href="https://github.com/Amubasshir"
              className=" flex text-grey"
            >
              <BsGithub className="transition-colors duration-300 hover:text-gray-400" />
            </Link>
            <Link
              href="https://mubasshir-ahmed.vercel.app/"
              className=" flex text-grey"
            >
              <BsTwitter className="transition-colors duration-300 hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%]  lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 text-base font-semibold">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-gray-500"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);
