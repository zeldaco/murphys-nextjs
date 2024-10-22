/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import Image from 'next/image';
import Link from 'next/link';

const TopMenu: React.FC = () => (
  <nav className="container-fluid justify-content-center" id="topMenu">
    <ul className="nav justify-content-start">
      <li className="navbar-brand">
        <Image
          src="http://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/murphyslogowhite.png"
          alt="Murphy's Logo"
          width={150}
          height={50}
        />
      </li>
    </ul>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link href="#" className="nav-link">Home</Link>
      </li>
        <li className="nav-item">
          <Link href="#" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link">St. Patrick&apos;s Day</Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link">To Go Ordering</Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link"><i className="bi bi-instagram" /></Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link"><i className="bi bi-facebook"></i></Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link"><i className="bi bi-twitter"></i></Link>
        </li>
      </ul>
    </nav>
);

export default TopMenu;
