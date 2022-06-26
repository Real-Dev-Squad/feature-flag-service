import TableHeader from "../TableHeader/TableHeader";
import TableItem from "../TableItem/TableItem";
import { featureFlagsMock } from "./Mock";
import { useState } from 'react';

export default function Table() {
  const [featureFlags, setFeatureFlags] = useState(featureFlagsMock);

  function toggleFeatureFlag(featureFlagIndex) {
    const newFeatureFlags = [...featureFlags];
    newFeatureFlags[featureFlagIndex].enabled = !newFeatureFlags[featureFlagIndex].enabled;
    setFeatureFlags(newFeatureFlags);
  }

  return (
    <div
      className='py-2 rounded shadow rounded-3xl max-w-5xl'
      tabIndex='0'
      aria-label='Feature Flags'
    >
      <table
        className='w-full text-sm text-left table-fixed'
      >
        <thead>
          <TableHeader />
        </thead>

        <tbody>
          {featureFlags.map((featureFlag, index) =>
            <TableItem featureFlag={featureFlag} key={featureFlag.id} toggle={() => toggleFeatureFlag(index)}/>
          )}
        </tbody>
      </table>
    </div>
  )
}