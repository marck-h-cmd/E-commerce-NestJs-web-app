import React from 'react';
import Slider from '../components/common/Slider'
const Home = () => {
  return (
    <div className=''>
      <div className='flex justify-evenly max-md:flex-col'>
        <div className='flex flex-col p-4 gap-2 text-lg bg-slate-50 max-md:hidden '>
          <a>Woman's Fashion</a>
          <a>Men's Fashion </a>
          <a>Electronics</a>
          <a>Home & Lifestyle </a>
          <a>Medicine</a>
          <a>Sports & Outdoor</a>
          <a>Baby's & Toys</a>
          <a>Groceries & Pets</a>
          <a>Health & Beauty</a>
        </div>
        <div>
          <Slider></Slider>

        </div>
      </div>
      <TodayProducts></TodayProducts>
      <br></br>
      <Categories></Categories>
      <br></br>
      <BestSellingProducts></BestSellingProducts>
      <br></br>
      <ExploreProducts></ExploreProducts>
 
    </div>
  );
};

const TodayProducts = () =>{

  return(
    <div className='card block p-4 '>
    <div className='block '>
      <div className='flex gap-3'>
        <div className='red-label w-3 bg-red-500 px-2 py-4'></div>
        <p className='text-red-500 font-semibold'>Today's</p>

      </div>
      <div className='flex justify-between my-4'>
        <h3 className='text-4xl '>Flash Sales</h3>
        <div className='timer '>4:00:12:22</div>
        <div className='arrows flex gap-4'>
          <button className='bg-slate-100 p-1 rounded-full'>
            <svg
              className="w-6 h-6" 
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M4 12L8 8M4 12L8 16"
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <button className='bg-slate-100 p-1 rounded-full'>
            <svg
              className="w-6 h-6" 
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M20 12L16 8M20 12L16 16"
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 justify-center p-8 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <div className='flex justify-center'>
      <button className='px-8 py-4 bg-red-500 my-2 text-white'>View all products</button>

    </div>

  </div>
  )

}

const ExploreProducts = () =>{

  return(
    <div className='card block p-4 '>
    <div className='block '>
      <div className='flex gap-3'>
        <div className='red-label w-3 bg-red-500 px-2 py-4'></div>
        <p className='text-red-500 font-semibold'>Our Producrs</p>

      </div>
      <div className='flex justify-between my-4'>
        <h3 className='text-4xl '>Explore our Products</h3>
        <div className='arrows flex gap-4'>
          <button className='bg-slate-100 p-1 rounded-full'>
            <svg
              className="w-6 h-6" 
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M4 12L8 8M4 12L8 16"
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <button className='bg-slate-100 p-1 rounded-full'>
            <svg
              className="w-6 h-6" 
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M20 12L16 8M20 12L16 16"
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 justify-center p-8 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <div className="flex items-center gap-4 justify-center p-8 my-2 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <div className='flex justify-center'>
      <button className='px-8 py-4 bg-red-500 my-2 text-white'>View all products</button>

    </div>

  </div>
  )

}

const BestSellingProducts = () =>{

  return(
    <div className='card block p-4 '>
    <div className='block '>
      <div className='flex gap-3'>
        <div className='red-label w-3 bg-red-500 px-2 py-4'></div>
        <p className='text-red-500 font-semibold'>This Month</p>

      </div>
      <div className='flex justify-between my-4'>
        <h3 className='text-4xl '>Best Sellings Products</h3>

        <div className='button flex gap-4'>
        <button className='px-8 py-4 bg-red-500 my-2 text-white'>View all</button>

        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 justify-center p-8 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
   

  </div>
  )

}

const ProductCard = () => {
  return (
    <div className="block w-64 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Product Image with Overlay */}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
          alt="Product"
          className="w-full h-56 object-cover"
        />
        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full">
          30%
        </div>
        {/* Icons */}
        <div className="absolute top-2 right-2 space-y-2 space-x-2">
          <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
            <svg
              className="w-6 h-6 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
            <svg
              className="w-6 h-6 text-gray-800"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                <path
                  d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
                  stroke="currentColor"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">jhrrrh 22 HV</h3>
        <p className="text-lg font-semibold text-red-600 mt-2">33$</p>
        <div className="flex items-center mt-2">
          {[...Array(4)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Categories = () =>{

  return(
    <div className='card block p-4 '>
    <div className='block '>
      <div className='flex gap-3'>
        <div className='red-label w-3 bg-red-500 px-2 py-4'></div>
        <p className='text-red-500 font-semibold'>Categories</p>

      </div>
      <div className='flex justify-between my-4'>
        <h3 className='text-4xl '>Browse by Categories</h3>

        <div className='arrows flex gap-4'>
          <button className=' p-1 rounded-full'>
            <svg
              className="w-6 h-6" 
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M4 12L8 8M4 12L8 16"
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
          <button className='bg-slate-100 p-1 rounded-full'>
            <svg
              className="w-6 h-6" 
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M20 12L16 8M20 12L16 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 justify-center p-8 ">
    <CategoryCard
  icon={`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M12 18.01V18M8 3H16C17.1046 3 18 3.89543 18 5V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V5C6 3.89543 6.89543 3 8 3Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
  </svg>`}
  title={'Phones'}
/>
<CategoryCard icon={`<svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><line class="cls-1" x1="8.18" y1="22.5" x2="9.14" y2="17.73"></line><line class="cls-1" x1="5.32" y1="22.5" x2="18.68" y2="22.5"></line><rect class="cls-1" x="1.5" y="1.5" width="21" height="16.23" rx="1.91"></rect><line class="cls-1" x1="15.75" y1="22.5" x2="14.8" y2="17.73"></line><line class="cls-1" x1="1.5" y1="13.91" x2="22.5" y2="13.91"></line></g></svg>`} title={'Computers'}></CategoryCard>
 {/* Product Details 
<Categories icon={`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-smartwatch"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"></path> <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"></path> </g></svg>`} title={`Smartwatch`} ></Categories>

<Categories icon={`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`} title={`Camera`} ></Categories>
<Categories icon={`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H10M8 10V14M16 13H16.01M18 11H18.01M5.2 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V9.2C22 8.0799 22 7.51984 21.782 7.09202C21.5903 6.71569 21.2843 6.40973 20.908 6.21799C20.4802 6 19.9201 6 18.8 6H5.2C4.0799 6 3.51984 6 3.09202 6.21799C2.71569 6.40973 2.40973 6.71569 2.21799 7.09202C2 7.51984 2 8.07989 2 9.2V14.8C2 15.9201 2 16.4802 2.21799 16.908C2.40973 17.2843 2.71569 17.5903 3.09202 17.782C3.51984 18 4.07989 18 5.2 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`} title={`Gaming`} ></Categories>
*/}


    </div>


  </div>
  )

}

const CategoryCard = ({ icon, title }) => {
  return (
    <a href='#' className='w-36 h-36  flex flex-col items-center justify-center  border-slate-500 border-2 cursor-pointer'>
      <div
        className='w-16 h-16'
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <p className='font-semibold my-1'>{title}</p>
    </a>
  );
};


const StarIcon = () => {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Home;