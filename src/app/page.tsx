"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { getAge } from "@/utils/helper";

const navigation = [
  { name: "Home", href: "#" },
  { name: "What I Do", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Resume", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact me", href: "#" },
  // { name: "Download CV", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <header>
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6">
              Download CV <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog> */}
      </header>
      <main className="p-6 lg:px-8">
        <section aria-label="home" id="home">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-semibold mb-4">
                {/* Hello, I'm  */}
                Shivharakh Yadav
              </h1>
              <h6 className="text-lg font-semibold mb-4 pl-2">
                - MERN Stack Developer
              </h6>
            </div>
            <div className="h-44 w-44 border-4 border-lightgreen rounded-full overflow-hidden inline-block">
              <Image
                alt="profile"
                src="/profile1.jpg"
                width={300}
                height={300}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </section>
        <section aria-label="What I Do" id="What I Do">
          <div className="text-center p-5 mb-10">
            <h1 className="text-4xl font-bold">Know More Me</h1>
            <div className="m-auto w-20 h-0.5 bg-gray-500"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-2xl mb-2">
                I'm <b className="color-primary">Shivharakh Yadav</b>, a
                Software Developer
              </h1>
              <p>
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book
              </p>
              . Delivering work within time and budget which meets client's
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <label aria-label="Name" className="font-bold w-16">
                  Name:
                </label>
                <p>Shivharakh Yadav</p>
              </div>
              <div className="flex gap-4">
                <label aria-label="Email" className="font-bold w-16">
                  Email:
                </label>
                <p className="color-165ca8">
                  <a href="mailto:yadavshivharakhyadav@gmail.com">
                    yadavshivharakhyadav@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex gap-4">
                <label aria-label="Age" className="font-bold w-16">
                  Age:
                </label>
                <p>{getAge()}</p>
              </div>
              <div className="flex gap-4">
                <label aria-label="From" className="font-bold w-16">
                  From:
                </label>
                <p>Ahmedabad, Gujarat</p>
              </div>
              <button className="bg-color-165ca8 w-40 h-12 px-2 rounded-3xl mt-4 transform transition-transform duration-300 hover:-translate-y-2">
                Download CV <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
