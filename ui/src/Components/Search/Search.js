import { useFilter } from '../../Context/FilterContext';
import { SEARCH } from '../../Constant/constant';

export default function Search() {
  const {
    filters: { userSearchInput },
    updateFilters,
  } = useFilter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFilters(name, value);
  };

  return (
    <section className='m-2 sm:w-96  flex justify-center items-center'>
      <input
        type='text'
        className='
        flex
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-xl
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        placeholder-gray-300::placeholder
        placeholder-opacity-25
      '
        name={SEARCH.NAME}
        value={userSearchInput}
        onChange={handleInputChange}
        placeholder={SEARCH.PLACEHOLDER}
      />
    </section>
  );
}
