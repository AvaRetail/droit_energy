import React, { useEffect, useState } from 'react';

const Partners1 = () => {
  const [rotating, setRotating] = useState(true);

  useEffect(() => {
    const clientspeed = 1800;
    const seeclients = setInterval(rotateClients, clientspeed);

    function rotateClients() {
      if (!rotating) return;

      const $clientlogo = document.getElementById('clientlogo');
      const $first = $clientlogo.querySelector('li:first-child');

      $first.style.transition = 'margin-left 2s ease-in-out'; // Add CSS transition
      $first.style.marginLeft = '-220px';

      setTimeout(() => {
        $clientlogo.appendChild($first); // Move the first image to the end
        $first.style.marginLeft = '0px'; // Reset margin
      }, 2000);
    }

    return () => clearInterval(seeclients);
  }, [rotating]);

  const handleMouseEnter = () => {
    setRotating(false);
  };

  const handleMouseLeave = () => {
    setRotating(true);
  };

  return (
    <div className='container pt-3 pb-5'>
      <div id="ourclients" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        
        <div className="title mb-3 cleaner-h2 pb-2" >
                            <h5 className="text-primary">Our Proud Partners</h5>
                {/* <h1 className="mb-4">Experienced Team Members</h1> */}
                        </div>
        <div className="clients-wrap pt-3">
          <ul id="clientlogo" className="clearfix">
            <li>
              <img src="https://avaretail.ai/avaretail/image/Clients%20Logo/CAG%20Logo.png" alt="Logo" />
            </li>
            <li>
              <img src="https://avaretail.ai/avaretail/image/Clients%20Logo/Kelloggs%20Logo.png" alt="Logo"/>
            </li>
            <li>
              <img src="https://avaretail.ai/avaretail/image/Clients%20Logo/IntelLogo.png" alt="Logo"/>
            </li>
            <li>
              <img src="https://avaretail.ai/avaretail/image/Clients%20Logo/Wallmart%20Logo.png" alt="Logo"/>
            </li>
            <li>
              <img src="https://avaretail.ai/avaretail/image/Clients%20Logo/PnG%20Logo.png" alt="Logo"/>
            </li>
            <li>
              <img src="https://avaretail.ai/avaretail/image/Clients%20Logo/LIDILogo1.png" alt="Logo"/>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners1;
