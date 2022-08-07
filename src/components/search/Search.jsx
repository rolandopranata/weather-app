export default function Search() {
  return (
    <div className='w-full form-control'>
      <div className='input-group'>
        <input
          type='text'
          placeholder='Search…'
          className='w-full border-r-0 input input-bordered bg-white/5 border-slate-600'
        />
        <button className='cursor-pointer btn hover:bg-slate-900 hover:border-slate-600 btn-square bg-slate-800 border-slate-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
