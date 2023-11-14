


export default function Hero() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to our classroom!</h1>
                  <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our classroom has potential to achieve most of scholarship. Try our class now!!</p>
                  <a href="/auth/sign_up" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                      Get started
                      <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src="../classroom.jpg"/>
              </div>                
          </div>
      </section>

        <section class="bg-white dark:bg-gray-900">
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Lots of diversity in the classroom</h2>
                  <p class="mb-4">Our English class is a diverse and inclusive learning environment where students from various backgrounds come together to share their perspectives. Embrace the richness of cultural diversity as we learn and grow together in all proficiencies.</p>
              </div>
              <div class="grid grid-cols-2 gap-4 mt-8">
                  <img class="w-full rounded-lg" src="../classroom1.jpg" />
                  <img class="mt-4 w-full lg:mt-10 rounded-lg" src="../classroom2.jpg"/>
              </div>
          </div>
      </section>
    </>
  );
}
