import React from 'react';
import { faker } from '@faker-js/faker';

/**
 * This code exports a React functional component named CoreInfo that displays
   random information. It uses JSX to create and return a div element with two
   child elements, a div and an h4 element. The first child div element contains
   two child elements: a span and an h1 element. 
   
   The span element displays a randomly selected value from an array of military
   ranks, and the h1 element displays a randomly generated name using the faker
   library. 
   
   The second child h4 element displays a randomly generated string that
   represents the marital status, a randomly generated number, and a randomly
   generated letter, followed by a fixed string that represents a military unit. 
   
   The classNames in this code are used to apply various styles to the rendered
   HTML elements using Tailwind CSS.
 *
 * @param {*} param0
 * @returns
 */

export function CoreInfo({}) {
  return (
    <div className='flex flex-col justify-center space-y-2 md:items-start'>
      <div className='text-center text-3xl font-bold tracking-tight md:text-7xl'>
        <span className='block md:inline'>{`[RANK]`}</span>{' '}
        <h1 className='block md:inline'>{`[Last], [First] [Mi]`}</h1>
      </div>
      {/* <h4 className='text-center font-light tracking-tight md:text-2xl'>{`${
        ['Single', 'Married', 'Divorced'][Math.floor(Math.random() * 3)]
      } 1D7${['1', '3', '5', '7', '9'][Math.floor(Math.random() * 5)]}1${
        ['Q', 'D', 'X', 'Z'][Math.floor(Math.random() * 4)]
      } arriving from OL MLST 336 TRAINING SQ FFJLP1`}</h4> */}
      <h4 className='text-center font-light tracking-tight md:text-2xl'>{`[Marriage status] [AFSC] coming from [LOSING PAS CLEARTEXT]`}</h4>
    </div>
  );
}
