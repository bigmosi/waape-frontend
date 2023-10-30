import '/globals.css';
import Layout from '@/components/layout';
import { FiChevronRight } from "react-icons/fi";

export default function Home() {
  return (
    <Layout>
      <div className='text-white mt-20'>
        <div className="text-center flex justify-center mb-5">
          <button className="text-center rounded-full bg-graycolor p-1 flex">Introducing Raft Cards <FiChevronRight style={{marginLeft: 10, marginTop: 4}} /></button>
        </div>
        <h1 className='md:text-5xl text-2xl text-center'>Building the future of <br/> bankng.</h1>
        <p className='text-center mt-10'>Experience the future of bankng with RAFT. We're here to <br/> empower your financial journey.</p>
      </div>
      <div className="text-center mt-10">
        <button className='text-white rounded-full p-2 bg-green-900'>Get Started</button>
      </div>
      <div className='flex justify-center mt-10'>
      <img src="/images/logo6.jpg" alt='' width={800} height={100} />
      </div>
    </Layout>
  );
}
