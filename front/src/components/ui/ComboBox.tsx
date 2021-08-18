import React, { SelectHTMLAttributes } from 'react';

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
	labelName?: string;
	options: (string | undefined | number)[];
	defaultValue?: string;
	valueChange: (value: any) => void;
};

export default function ComboBox({
	labelName,
	options,
	valueChange,
	defaultValue,
	...props
}: Props) {
	return (
		<div className="w-full col-span-6 sm:col-span-3">
			{labelName ? (
				<label htmlFor={labelName} className="font-medium text-gray-800 dark:text-gray-200 mb-1">
					{labelName}
				</label>
			) : null}

			<select
				id={labelName}
				name={labelName}
				autoComplete={labelName}
				onChange={(e) => valueChange(e.target.value)}
				className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 w-full rounded-md px-4 py-2 border border-gray-400 focus:border-brand-600 focus:ring-brand-500 disabled:opacity-60 disabled:bg-gray-500 disabled:bg-opacity-20"
				{...props}
			>
				{defaultValue ? (
					<option value="none" selected disabled hidden>
						Select a {defaultValue}
					</option>
				) : null}

				{options.map((option) => {
					if (option !== undefined)
						return (
							<option value={option} key={option}>
								{option}
							</option>
						);
				})}
			</select>
		</div>
	);
}
