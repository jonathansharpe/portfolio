'use client';
import React from 'react';

export default function Paragraph({children, variant}) {
	const styles = {
		default: "w-auto",
		small: "w-1/4 border rounded-md p-1 border-emerald-500 bg-linear-14 from-sky-900 to-slate-900",
		wide: "w-3/4 px-5"
	}
	const chosenStyle = styles[variant] || styles.default;
	return (
		<p className={`my-2 font-dmsans ${chosenStyle}`}>
			{children}
		</p>
	)
}
