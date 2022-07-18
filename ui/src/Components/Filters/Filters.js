import { useFilter } from '../../Context/FilterContext';

export default function Filters() {
  const {
    filters: { featureStatus },
    updateFilters,
  } = useFilter();

  const onValueChange = (event) => {
    const { name, value } = event.target;
    updateFilters(name, value);
  };

  return (
    <section className='m-2 xl:w-96'>
      <select
        className='border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block xl:w-36 px-2
        py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        value={featureStatus}
        name='featureStatus'
        onChange={onValueChange}
      >
        <option value='all'>Both</option>
        <option value='true'>Enabled</option>
        <option value='false'>Disabled</option>
      </select>
    </section>
  );
}
