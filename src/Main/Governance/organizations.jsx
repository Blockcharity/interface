import React, { useState, useEffect } from 'react';
import Blockcharity from '../../Contracts/Blockcharity';
import "./lowersection.css"

function LowerSection() {
  const [orgData, setOrgData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const orgList = await Blockcharity.methods.getOrganizations().call();
      console.log(orgList);
      setOrgData(orgList);
    }
    fetchData();
  }, []);

  return (
    <div className="lower-section">
      {orgData.map((org) => (
        <div key={org.id} onClick={() => console.log(org)} className="org-card">
          <h2 className="org-name">{org.name}</h2>
          <p className="donation-amount">Amount donated: {org.ftmGathered}</p>
        </div>
      ))}
    </div>
  );
}

export default LowerSection;
