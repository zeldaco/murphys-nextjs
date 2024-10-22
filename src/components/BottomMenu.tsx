/* eslint-disable @typescript-eslint/indent */
/* eslint-disable arrow-body-style */

'use client';

const BottomMenu: React.FC = () => {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-white">Location</h5>
              <p className="text-white">123 Merchant St, Honolulu, HI</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-white">Hours</h5>
              <p className="text-white">Mon - Fri: 11:00am - 9:00pm</p>
              <p className="text-white">Sat - Sun: Closed</p>
            </div>
            <div className="col-md-4">
              <h5 className="text-white">Contact Us</h5>
              <p className="text-white">Phone: 808-531-0422</p>
              <p className="text-white">Email: info@murphys.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default BottomMenu;
