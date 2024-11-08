import Heading from '@/components/ui/Heading';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-56 w-56 bg-primary opacity-50 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <Heading
              title="Authentication with Next.js"
              description="Simple, Meaningful User & Admin authentication"
              divClassName="pt-3 text-gray-300"
              headingClassName="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
              paragraphClassName="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded transition duration-300">
            Get Started
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Learn More
          </button>
        </div>
        <div className="mt-10 pt-10 pb-24 flex justify-center relative">
          <Image
            src="/intro_lock_image.png"
            alt="User Authentication Illustration"
            width={300}
            height={300}
            className="rounded-lg shadow-2xl shadow-primary/90 relative z-10"
          />
        </div>
      </div>
    </div>
  );
}
