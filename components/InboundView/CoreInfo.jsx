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

export function CoreInfo({ rank, name, maritalStatus, afsc, losingPas }) {
  return (
    <div className='flex flex-col justify-center space-y-2 md:items-start'>
      <div className='text-center text-3xl font-bold tracking-tight md:text-left md:text-7xl'>
        <span className='block md:inline'>{rank}</span>{' '}
        <h1 className='block md:inline'>
          {`${name.split(',')[0]},`}
          <span className='capitalize'>{`${name
            .split(',')[1]
            .toLowerCase()}`}</span>
        </h1>
      </div>
      <h4 className='text-center font-light tracking-tight md:text-2xl'>{`${
        maritalStatus === 'S'
          ? 'Single'
          : maritalStatus === 'M'
          ? 'Married'
          : 'Divorced'
      } ${afsc.slice(1)} coming from ${losingPas}`}</h4>
    </div>
  );
}
