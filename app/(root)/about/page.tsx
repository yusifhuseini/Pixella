import Image from "next/image"

const About = () => {
  return (
    <>
      <header className="h2-bold text-dark-600 text-center">
        <h1 className="text-5xl mb-4">Pixella</h1>
      </header>
      <div className="font-sans">

        <header className="text-white home">
          <h1 className="text-4xl mb-4">Effortless Photo Editing. Powered by AI.</h1>
          <p className="text-lg mb-8">Enhance your photos in seconds with Pixella&apos;s intuitive tools.</p>
          <a href="#" className="text-white-500 bg-transparent border border-blue-500 rounded-full py-2 px-6 hover:bg-blue-500 hover:text-white transition duration-300">Click here to try Pixella</a>
        </header>

        <nav className="bg-gray-200 flex justify-center py-5 space-x-10 rounded-xl">
          <a href="#features" className="text-gray-800 px-4 hover:underline">Features</a>
          <a href="#benefits" className="text-gray-800 px-4 hover:underline">Benefits</a>
          <a href="#about" className="text-gray-800 px-4 hover:underline">About</a>
        </nav>

        <main className="p-4">
          <section id="features" className="mb-16 mt-16">
            <h2 className="text-4xl font-bold text-center">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Generative Fill */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-16 h-16 mb-4">
                  <Image src="/assets/icons/stars.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Generative Fill</h3>
                <p className="text-gray-600">Automatically fill in missing or unwanted background areas in your photos with AI-generated content. Perfect for removing distractions or enhancing the overall composition of your images.</p>
              </div>
              {/* Image Restores */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-16 h-16 mb-4">
                  <Image src="/assets/icons/image.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Image Restores</h3>
                <p className="text-gray-600">Repair damaged or corrupted photos with AI-powered restoration tools. Whether your photos are faded, torn, or have missing parts, Pixella can help you bring them back to life with ease.</p>
              </div>
              {/* Object Removal */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-16 h-16 mb-4">
                  <Image src="/assets/icons/scan.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Object Removal</h3>
                <p className="text-gray-600">Seamlessly remove unwanted objects from your photos. Whether it&apos;s a stray person, distracting background element, or blemish, Pixella&apos;s powerful AI algorithms make object removal a breeze.</p>
              </div>
              {/* Objects Recolor */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-16 h-16 mb-4">
                  <Image src="/assets/icons/filter.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Objects Recolor</h3>
                <p className="text-gray-600">Transform the look of specific objects within your photos by changing their color. Whether you want to match a different color scheme or add creative flair, Pixella&apos;s object recoloring feature gives you complete control over your image editing process.</p>
              </div>
              {/* Background Removal */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-16 h-16 mb-4">
                  <Image src="/assets/icons/camera.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Background Removal</h3>
                <p className="text-gray-600">Effortlessly remove backgrounds from your photos for creating clean cutouts or applying different backgrounds. Whether you&apos;re designing graphics, composing collages, or editing portraits, Pixella&apos;s background removal tool ensures precision and ease of use.</p>
              </div>
              {/* Buy Credits */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-center items-center bg-blue-500 text-white rounded-full w-16 h-16 mb-4">
                  <Image src="/assets/icons/bag.svg" alt="Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Buy Credits</h3>
                <p className="text-gray-600">Purchase credits to use Pixella&apos;s powerful AI tools. With seamless integration with Stripe, buying credits is secure and hassle-free. Get started with Pixella today and unlock the full potential of AI-powered photo editing!</p>
              </div>
              {/* Add more feature cards as needed */}
            </div>
          </section>

          <section id="benefits" className="mb-16">
            <h2 className="text-4xl font-bold text-center">Benefits</h2>
            <div className="flex flex-col md:flex-row justify-between">
              {/* Benefit 1 */}
              <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-600">Pixella offers an accessible solution for individuals and businesses seeking professional-quality photo editing tools without the need for extensive manual manipulation or expensive software. With its user-friendly interface and AI-powered features, Pixella empowers users to enhance and transform their photos easily, regardless of their level of expertise.</p>
              </div>
              {/* Benefit 2 */}
              <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Time-saving</h3>
                <p className="text-gray-600">By leveraging AI algorithms for tasks like object removal, background removal, and image restoration, Pixella significantly reduces the time and effort required for photo editing. Users can quickly achieve desired results without the need for manual editing, allowing them to focus more on their creative vision and less on tedious editing tasks.</p>
              </div>
              {/* Benefit 3 */}
              <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Versatility</h3>
                <p className="text-gray-600">Pixella caters to a wide range of editing needs, from enhancing personal photos for social media to professionally editing product images for e-commerce. Whether users are looking to retouch portraits, remove unwanted objects, or restore old photos, Pixella offers a versatile set of AI-powered tools to meet their editing requirements.</p>
              </div>
              {/* Add more benefits as needed */}
            </div>
          </section>

          <section id="testimonials" className="mb-16 ">
            <h2 className="text-4xl font-bold text-center">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <blockquote className="italic text-gray-600 mb-4">&quot;Pixella changed the way I edit photos. It&apos;s so intuitive and powerful!&quot;</blockquote>
                <p className="font-semibold">Benjamin Allisee</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <blockquote className="italic text-gray-600 mb-4">&quot;I&apos;m amazed by the results I can achieve with Pixella. Highly recommended!&quot;</blockquote>
                <p className="font-semibold">Derrick Asamoah</p>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <blockquote className="italic text-gray-600 mb-4">&quot;Pixella is user-friendly and produces fantastic results every time! Great app.&quot;</blockquote>
                <p className="font-semibold">Jamila Seidu</p>
              </div>
              {/* Add more testimonials as needed */}
            </div>
          </section>

          <section id="about" className="mb-16 text-justify">
            <h2 className="text-4xl font-bold mb-8 text-center">The Story Behind Pixella</h2>
            <p className="text-gray-600">
              Honestly, the inspiration for Pixella came from a place of frustration. As a passionate photographer and digital artist, I found myself constantly wrestling with the limitations of traditional photo editing software. Whether it was painstakingly removing unwanted objects or attempting to restore old, cherished photos, the process was often time-consuming and cumbersome.
            </p>
            <br />
            <p className="text-gray-600">
              This experience made me realize there had to be a better way. Pixella was born from the desire to create a user-friendly platform that leverages AI to make photo editing powerful, accessible, and most importantly, fun! I wanted to empower individuals like myself to effortlessly enhance their photos, whether they&apos;re seasoned professionals or casual enthusiasts.
            </p>
            <br />
            <p className="text-gray-600">
              This project is a Portfolio Project for ALX Africa. You can find the GitHub repository <a href="https://github.com/your-username/pixella" target="_blank" rel="noopener noreferrer"><u><em><strong>here</strong></em></u></a>.
            </p>
          </section>

          <section id="about" className="mb-16 text-center">
            {/* Links to project owner's profiles */}
            <div className="mb-8">
              <h3 className="text-4xl font-bold mb-5">Project Owner</h3>
              <ul className="text-lg">
                <li><a href="https://www.linkedin.com/in/huseiniyusif/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/yusifhuseini" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com/huseini_yusif" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </section>

          <section id="about" className="mb-16 text-center">
            {/* Video section (optional) */}
            <div className="flex flex-col items-center justify-center mb-8">
              <h3 className="text-4xl font-bold mb-5">Project Overview Video</h3>
              <iframe className="" width="560" height="315" src="https://www.youtube.com/embed/your-video-id" title="Project Overview Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </section>

          {/* Additional elements */}
          <div className="bg-gray-100 py-12">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Why Choose Pixella?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
                  <Image src="/assets/images/solution.png" alt="Creativity" width={96} height={96} className="mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Creative Solutions</h3>
                  <p className="text-gray-600 text-center">Unlock your creative potential with Pixella&apos;s AI-powered editing tools.</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
                  <Image src="/assets/images/payment.png" alt="Secure" width={96} height={96} className="mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                  <p className="text-gray-600 text-center">Buy credits securely with our seamless integration with Stripe.</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
                  <Image src="/assets/images/support.png" alt="Support" width={96} height={96} className="mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-gray-600 text-center">Our support team is here to assist you every step of the way.</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <br />

        <footer className="text-center mt-4 py-8 bg-gray-900 text-white">
          <p>&copy; {new Date().getFullYear()} Pixella. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default About;
