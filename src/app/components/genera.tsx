'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { SearchBox } from './searchbox';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const genera = [
  {
    id: 1,
    name: '1Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: '1Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: '1Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: '1Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
      id: 5,
      name: '2Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: '2Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: '2Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: '2Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]

interface BirdProfile {
  id: number,
  name: string,
  href: string,
  price: string,
  imageSrc: string,
  imageAlt: string,
}

export default function Genera({ isAdmin }: { isAdmin: boolean }) {
  
  const [breedData, setBreed] = useState<BirdProfile[]>([])

    const searchParams = useSearchParams()

    const titleStyle = {
      fontWeight: 'bold',
      fontSize: '1.5em',
    };

    const plusButtonStyle = {
      Position: 'absolute', // Absolutely position the button
      top: '100%', // Position it below the search box
      left: '0', // Align it to the left of the container
      marginTop: '10px', // Add some spacing from the search box
      padding: '10px 20px',
      // backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };
    // Now get the query 

    const searchQuery = searchParams && searchParams.get("searchInput"); // we use `q` to set the query to the browser, it could be anything

    useEffect(() => {

      console.log(searchQuery)
      const handleSearch = () => {

        // Filter the data based on search query

        const findBreed = genera.filter((bird) => {

          if (searchQuery) {
            
            return (bird.name.toLowerCase().includes(searchQuery.toLowerCase()));

          } else return true;

        });
        setBreed(findBreed);

      };

    // Call handleSearch when searchQuery changes

    handleSearch();

  }, [searchQuery]); // Only rerun the effect if searchQuery changes

  const totalBreed = breedData.length;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        {
          isAdmin ? (
            <div className='flex justify-center'>Admin Mode</div>
          ) : (<></>)
        }
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 pt-4 sm:px-6 sm:pt-6 lg:max-w-7xl lg:px-8">
            <SearchBox defaultValue={searchQuery} />
          </div>

          <div className='flex justify-center px-8 pt-8'>
            <button className='w-full flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'>Create item</button>
          </div>

          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            {totalBreed === 0 ? <p>No result returned</p> : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {breedData.map((genus) => (
                  <a key={genus.id} href={genus.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src={genus.imageSrc}
                        alt={genus.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{genus.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{genus.price}</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  )
}
