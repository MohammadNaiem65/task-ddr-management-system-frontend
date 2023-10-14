import { useState } from 'react';

export default function Form() {
	const [formDetails, setFormDetails] = useState({
		startDate: '',
		endDate: '',
		excluded: [],
		lead: '',
	});

	const reset = () => {
		setFormDetails({
			startDate: '',
			endDate: '',
			excluded: [],
			lead: '',
		});
	};

	const handleAddLead = (e) => {
		e.preventDefault();

		console.log(formDetails);
	};

	return (
		<form
			className='w-3/5 h-36 mx-auto grid grid-cols-4 gap-x-8 gap-y-5'
			onSubmit={handleAddLead}>
			<div className='flex flex-col col-span-2'>
				<label htmlFor='start-date' className='mb-2'>
					Enter start date.
				</label>
				<input
					type='date'
					name='startDate'
					id='start-date'
					className='pl-5 pr-2 py-1 bg-slate-600'
					required
					value={formDetails.startDate}
					onChange={(e) =>
						setFormDetails({
							...formDetails,
							startDate: e.target.value,
						})
					}
				/>
			</div>

			<div className='flex flex-col col-span-2'>
				<label htmlFor='end-date' className='mb-2'>
					Enter end date.
				</label>
				<input
					type='date'
					name='endDate'
					id='end-date'
					className='pl-5 pr-2 py-1 bg-slate-600'
					required
					value={formDetails.endDate}
					onChange={(e) =>
						setFormDetails({
							...formDetails,
							endDate: e.target.value,
						})
					}
				/>
			</div>

			<div className='flex flex-col col-span-2'>
				<label htmlFor='exclude-date' className='mb-2'>
					Exclude date.
				</label>
				<input
					type='date'
					name='excludeDate'
					id='exclude-date'
					className='pl-5 pr-2 py-1 bg-slate-600'
					disabled={!formDetails.startDate || !formDetails.endDate}
					min={formDetails.startDate}
					max={formDetails.endDate}
					onChange={(e) => {
						if (!formDetails.excluded.includes(e.target.value)) {
							setFormDetails({
								...formDetails,
								excluded: [
									...formDetails.excluded,
									e.target.value,
								],
							});
						}
					}}
				/>
			</div>

			<div className='col-span-2 flex items-end'>
				<p>
					{formDetails.excluded.map((date, index) => (
						<span
							key={index}
							className="mr-2 after:content-[','] last:after:content-[]">
							{date}
						</span>
					))}
				</p>
			</div>

			<div className='flex flex-col col-span-2'>
				<label htmlFor='lead' className='mb-2'>
					Enter lead amount
				</label>
				<input
					type='number'
					name='lead'
					id='lead'
					className='pl-5 pr-2 py-1 bg-slate-600'
					required
					value={formDetails.lead}
					onChange={(e) =>
						setFormDetails({
							...formDetails,
							lead: e.target.value,
						})
					}
				/>
			</div>

			<div className='col-span-2 flex items-end justify-end'>
				<button
					className='w-24 mr-3 py-2 bg-red-300 hover:bg-red-400 font-bold rounded-full'
					type='button'
					onClick={reset}>
					Cancel
				</button>

				<button
					type='submit'
					className='w-24 py-2 bg-green-300 hover:bg-green-400 text-white font-bold rounded-full'>
					Add
				</button>
			</div>
		</form>
	);
}
