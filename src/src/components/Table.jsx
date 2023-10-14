export default function Table() {
    const trCount = [1, 2, 3, 4, 5];

    return (
		<table className='w-4/5 mx-auto mt-10 border-2 border-gray-700'>
			<thead className='hidden sm:table-header-group'>
				<tr className='bg-gray-700'>
					<th className='px-3 py-5 text-start'>ID</th>
					<th className='px-3 py-5 text-start'>Start Date</th>
					<th className='px-3 py-5 text-start'>End Date</th>
					<th className='px-3 py-5 text-start'>Month, Year</th>
					<th className='px-3 py-5 text-start'>Dates Excluded</th>
					<th className='px-3 py-5 text-start'>Number of Days</th>
					<th className='px-3 py-5 text-start'>Lead Count</th>
					<th className='px-3 py-5 text-start'>Expected DDR</th>
					<th className='px-3 py-5 text-start'>Last Updated</th>
				</tr>
			</thead>

			<tbody className='text-gray-300'>
				{trCount.map((tr) => (
					<tr key={tr} className='even:bg-gray-800'>
						<td
							className='px-3 pt-4 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='ID'>
							<span>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span>{tr}</span>
							</span>
						</td>

						<td
							className='px-3 py-1 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='Start Date'>
							<span>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span>12 May 2022</span>
							</span>
						</td>

						<td
							className='px-3 py-1 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='End Date'>
							<span>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span>20 May 2022</span>
							</span>
						</td>

						<td
							className='px-3 py-1 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='Month, Year'>
							<span>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span>May 2022</span>
							</span>
						</td>

						<td
							className='max-w-xs px-3 py-1 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='Dates Excluded'>
							<span className='flex'>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span>14 May 2022, 17 May 2022</span>
							</span>
						</td>

						<td
							className='px-3 py-1 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='Number of Days'>
							<span>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span>09</span>
							</span>
						</td>

						<td
							className='px-3 py-1 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='Lead Count'>
							<span>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span>400</span>
							</span>
						</td>

						<td
							className='px-3 py-1 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='Expected DDR'>
							<span>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span>44.44</span>
							</span>
						</td>

						<td
							className='px-3 pb-4 sm:py-4 grid grid-cols-[15ch_auto] sm:table-cell sm:before:hidden'
							data-cell='Last Updated'>
							<span>
								<span className='font-semibold mr-2 sm:hidden'>
									:
								</span>
								<span className='text-gray-300'>
									12 May 2022
								</span>
							</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}