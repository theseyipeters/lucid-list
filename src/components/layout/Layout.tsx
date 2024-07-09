import Header from "./Header";

import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
	return (
		<div className="layout">
			<Header />

			<div className="layout-container">
				<div className="layout-sidebar-container">
					<Sidebar />
				</div>

				<div className="page-container">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
