export default function Location({ setQuery }) {
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <button
      onClick={handleLocationClick}
      className='btn z-10 btn-square bg-black/50 hover:bg-black backdrop-blur-sm border-black/50'>
      <svg
        className='w-6 h-6'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <path
          d='M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </svg>
    </button>
  );
}
