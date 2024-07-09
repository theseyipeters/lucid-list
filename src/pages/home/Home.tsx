import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Main from "./Main";

const Home: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="h-fit lg:h-screen bg-gray-1 overflow-clip">
			<Header
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			<div className="flex flex-row h-full">
				<Sidebar />
				<Main searchQuery={searchQuery} />
			</div>
		</div>
	);
};

export default Home;
