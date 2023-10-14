import './App.css';
import Form from './src/components/Form';
import Table from './src/components/Table';

function App() {
	return (
		<div className='pt-10 flex flex-col gap-y-20'>
			<Form />
			<Table />
		</div>
	);
}

export default App;
