import React from 'react';
import { FcMultipleCameras } from "react-icons/fc";
import { AiTwotoneGift, AiFillFile, AiFillShopping } from "react-icons/ai";
import { BsStickies, BsFillCreditCard2FrontFill, BsFillDatabaseFill, BsCameraFill, BsArrowLeftRight, BsLockFill, BsFillPersonVcardFill, BsFillStickiesFill, BsChatLeftText } from "react-icons/bs";
import FaqPage from './FaqPage';

const Cart = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:ml-20 md:mr-2 m-5 md:m-10 bg-newcolor pt-5 md:pt-10 rounded-xl">
          <div className='ml-10 mr-10 p-4 rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}>
            <div className='flex justify-center'>
              <img src="/images/name.jpeg" alt='' width={40} height={40} className="rounded-full" />
              <div className='ml-3'>
                <h4>Wade Warren</h4>
                <p>Private wealth manager</p>
              </div>
            </div>
            <div className='flex justify-around mt-5'>
              <p>Send message</p>
              <BsChatLeftText />
            </div>
          </div>
          <div className="text-center">
            <div className="p-5">
              <h2 className="text-2xl md:text-3xl">Wealth Management</h2>
              <p className="text-sm md:text-base  text-textsmall">
                Make informed decisions for your financial future with our wealth management expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="md:ml-20 md:mr-5 m-5 md:m-10 bg-newcolor pt-5 md:pt-10 rounded-xl">
          <div className="text-center md:text-left mt-5 md:mt-10">
            <div className="flex flex-col items-center">
              <div className="text-center mt-10">
                <ul className="flex justify-center md:justify-start space-x-5">
                  <li className='p-5 rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}><FcMultipleCameras className="text-2xl md:text-3xl" /></li>
                  <li className='p-5 rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}><AiTwotoneGift className="text-2xl md:text-3xl" /></li>
                  <li className='p-5 rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}><AiFillFile className="text-2xl md:text-3xl" /></li>
                </ul>
              </div>
              <div className="text-center mt-10">
                <ul className="flex justify-center md:justify-start space-x-5">
                  <li className='p-5 rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}><AiFillShopping className="text-2xl md:text-3xl" /></li>
                  <li className='p-5 rounded-xl' style={{ background: 'linear-gradient(#131313, #202020)' }}><BsStickies className="text-2xl md:text-3xl" /></li>
                  <li className='rounded-xl p-5' style={{ background: 'linear-gradient(#131313, #202020)' }}><BsFillCreditCard2FrontFill className="text-2xl md:text-3xl" /></li>
                </ul>
              </div>

            </div>
            <div className="p-5">
              <h2 className="text-2xl md:text-3xl">Seamless Payments</h2>
              <p className="text-sm md:text-base  text-textsmall">
                Enjoy secure, seamless transactions that make managing your money a breeze.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-5xl text-center mt-20">Your Financial Freedom, <br /> Your Way</h2>
        <p className="text-center mt-10  text-textsmall">We believe that managing your finances should be effortless and cost-effective.<br />
          That's why we offer you the freedom you deserve
        </p>
        <div className="flex justify-center text-center mt-10">
          <img src="/images/Frame31.png" alt='' width={1200} height={50} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="m-4 p-4 max-w-sm text-center  rounded-lg">
          <div className="flex items-center space-x-2">
            <BsCameraFill />
            <h3 className="text-xl">No minimum balance fees</h3>
          </div>
          <p className="mt-3  text-textsmall">Say goodbye to minimum balance fees. Your account, your balance - no hidden charges</p>
        </div>
        <div className="m-4 p-4 max-w-sm text-center rounded-lg">
          <div className="flex items-center space-x-2">
            <BsFillDatabaseFill />
            <h3 className="text-xl">No monthly fees</h3>
          </div>
          <p className="mt-3  text-textsmall">Bank with us without worrying about monthly fees. Keep more of your money where it belongs - in your account</p>
        </div>
        <div className="m-4 p-4 max-w-sm text-center rounded-lg">
          <div className="flex items-center space-x-2">
            <BsArrowLeftRight />
            <h3 className="text-xl">No bank transfer fees</h3>
          </div>
          <p className="mt-3  text-textsmall">Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.</p>
        </div>
      </div>
      <div className="bg-greencolor">
        <div className='ml-10'>
          <h1 className='text-3xl md:text-8xl text-black'>Smart investments <br /> secure payments, <br />
            and expert guidance, all <br />
            in one place
          </h1>
        </div>
      </div>
      <div className="flex justify-center text-center mt-10">
        <img src="/images/Frame150.png" alt='' width={1200} height={50} />
      </div>
      <div className='mt-5'>
        <h3 className='text-center text-greencolor'>INTRODUCING</h3>
        <h2 className="text-center mt-5 text-3xl">Introducing RAFT's Next-<br />
          Gen Cards
        </h2>
        <p className="text-center text-textsmall">Discover RAFT's latest innovation-our new cards. Elevate your bankng <br />
          experince with cutting-edge features, security, and unprecedented<br />
          convenience.
        </p>
        <div className="flex justify-center text-center mt-10">
          <img src="/images/Component1.png" alt='' width={600} height={50} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="m-4 p-4 max-w-sm rounded-lg">
          <div className="flex items-center space-x-2">
            <BsFillStickiesFill />
            <h3 className="text-xl">Contact Technology</h3>
          </div>
          <p className="mt-3  text-textsmall">Our new cards come equipped with contactless technology,<br />
            allowing you to amke, swiff, secure payments with a simple tap.
          </p>
        </div>
        <div className="m-4 p-4 max-w-sm rounded-lg">
          <div className="flex items-center space-x-2">
            <BsFillPersonVcardFill />
            <h3 className="text-xl">Personalization</h3>
          </div>
          <p className="mt-3  text-textsmall">Customize your card to reflect our unique style. Choose from <br />
            a range of designs that suit your personality.
          </p>
        </div>
        <div className="m-4 p-4 max-w-sm rounded-lg">
          <div className="flex items-center space-x-2">
            <BsLockFill />
            <h3 className="text-xl">Enhance Security</h3>
          </div>
          <p className="mt-3  text-textsmall">Your peace of mind is our priority. Our cards feature advanced<br />
            security measures to protect your transactions and data.
          </p>
        </div>
      </div>
      <div className="bg-greencolor">
        <h2 className='text-center text-3xl md:text-7xl text-black'>Join Over 3 million <br />
          members
        </h2>
        <div>
          <div className="flex flex-wrap text-black space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2 p-4 max-w-md border-l border-black">
              <p>
                RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-10">
                <div className="space-x-2 w-full">
                  <h4>Robert Fox</h4>
                  <p>Happy RAFT User</p>
                </div>
                <img src="/images/name.jpeg" alt='' width={40} height={40} className="rounded-full" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 max-w-md border-l border-black">
              <p>
                RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-10">
                <div className="space-x-2 w-full">
                  <h4>Robert Fox</h4>
                  <p>Happy RAFT User</p>
                </div>
                <img src="/images/name.jpeg" alt='' width={40} height={40} className="rounded-full" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 max-w-md border-l border-black">
              <p>
                RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-10">
                <div className="space-x-2  w-full">
                  <h4>Robert Fox</h4>
                  <p>Happy RAFT User</p>
                </div>
                <img src="/images/name.jpeg" alt='' width={40} height={40} className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FaqPage />
    </div>
  );
};

export default Cart;
