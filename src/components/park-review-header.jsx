'use client';
import React from 'react';

export default function SectionHeader({children}) {
	return (
		<h1 className='text-3xl my-4 font-azeret'>
			{children}
		</h1>
	)
}
