import '/globals.css';
import Layout from '@/components/layout';
import { FiChevronRight, FiArrowUpLeft } from "react-icons/fi";
import { BsFillDatabaseFill, BsCameraFill, BsDatabaseFill } from "react-icons/bs";
import Cart from '@/components/Cart';


export default function Home() {
  return (
    <Layout>
      <div className='text-white mt-20'>
        <div className="text-center flex justify-center mb-5">
          <button className="text-center rounded-full bg-lighgray p-1 flex">Introducing Raft Cards <FiChevronRight style={{ marginLeft: 10, marginTop: 4 }} /></button>
        </div>
        <h1 className='md:text-5xl text-2xl text-center'>Building the future of <br /> bankng.</h1>
        <p className='text-center mt-10  text-textsmall'>Experience the future of bankng with RAFT. We're here to <br /> empower your financial journey.</p>
      </div>
      <div className="text-center mt-10">
        <button className='text-white rounded-full p-2 bg-green-900'>Get Started</button>
      </div>
      <div className='flex justify-center mt-10 pl-5 pr-5'>
        <img src="/images/Frame.png" alt='' width={1300} height={20} />
      </div>
      <div className="text-center mt-10">
        <h2 className="text-xl">FEATURED AND SEEN IN</h2>
        <ul className="list-none flex justify-center space-x-12 mt-4">
          <li>Forbes</li>
          <li>CNBC</li>
          <li>Bloomberg</li>
          <li>
            <img src="/images/vector.svg" alt='' width={50} height={50} />
          </li>
        </ul>
      </div>
      <div className='text-center mt-10'>
        <h2 className='text-5xl'>Elevate Your Financial <br /> Journey with RAFT</h2>
        <p className='mt-10  text-textsmall'>RAFT offers a world of financial posbilities. From investment to payments.<br /> We've got you covered.
          Join us and unlock your financial potentail today.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="m-10 bg-newcolor pt-10 rounded-xl">
          <div className="text-center mt-10">
            <div className="flex flex-col mt-10 items-center space-y-4">
              <div className='rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}>
              <button className="rounded-xl p-4">
                <div className="flex items-center  text-textsmall">
                  <div className="rounded p-0.5 bg-white  text-textsmall mr-1">
                    <FiArrowUpLeft />
                  </div>
                  +$22.15 Received from Kinyera Amos
                </div>
              </button>
              </div>
              <div className='rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}>
              <button className="border-gray-300 p-4 pl-5 pr-10">
                <div className="flex items-center  text-textsmall">
                  <div className="rounded text-white p-0.5 bg-green-400 shadow-md text-black mr-5">
                    <FiArrowUpLeft />
                  </div>+
                  $22.15 Received from Kinyera Amos
                </div>
              </button>
              </div>
            <div className='rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}>
            <button className="text-textsmall border-gray-300 p-4">
                <div className="flex items-center  text-textsmall">
                  <div className="border rounded p-0.5 bg-white text-black mr-1">
                    <FiArrowUpLeft />
                  </div>
                  +$20.15 Received from Julian Barbra
                </div>
              </button>
            </div>
            </div>
            <div className="text-start p-5 md:p-10">
              <h2 className="text-2xl md:text-3xl">Seamless Payments</h2>
              <p className="text-sm md:text-base  text-textsmall">
                Enjoy secure, seamless transactions that make managing your money a breeze.
              </p>
            </div>
          </div>
        </div>
        <div className="m-10 bg-newcolor pt-10 rounded-xl">
          <div className="text-center mt-10">
            <div className="flex flex-col mt-10 items-center space-y-4">
              <div className='rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}>
              <button className="p-4">
                <div className="flex items-center">
                  <div className="border rounded p-0.5 bg-white text-black mr-1">
                    <BsFillDatabaseFill />
                  </div>
                  Cryptocurrency
                </div>
              </button>
              </div>
              <div className='rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}>
              <button className="p-4 pl-5 pr-10">
                <div className="flex items-center  text-textsmall">
                  <div className="rounded text-white p-0.5 bg-green-400 shadow-md text-black mr-5">
                    <BsCameraFill />
                  </div>
                  Smart portfolio investing
                </div>
              </button>
              </div>
              <div className='rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}>
              <button className="p-4">
                <div className="flex items-center  text-textsmall">
                  <div className="border rounded p-0.5 bg-white text-black mr-1">
                    <BsDatabaseFill />
                  </div>
                  Sustainable investing
                </div>
              </button>
              </div>
            </div>
            <div className="text-start p-5 md:p-10">
              <h2 className="text-2xl md:text-3xl">Smart investing</h2>
              <p className="text-sm md:text-base mt-5  text-textsmall">
                Grow your wealth confidently with our personalized <br />
                investment solutions, tailored to your financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cart />
    </Layout>
  );
}
