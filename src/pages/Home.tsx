import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Main from "./Main";

const Home = () => {
	return (
		<div className="h-screen bg-gray-1">
			<Header />

			<div className="flex flex-row h-full">
				<Sidebar />
				<Main />
			</div>
		</div>
	);
};

export default Home;
