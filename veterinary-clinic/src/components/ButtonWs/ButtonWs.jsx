import React from "react";
import "../ButtonWs/ButtonWs.css";
import { BsWhatsapp } from "react-icons/bs";

const ButtonWs = () => {
	return (
		<div className="ctn-ws">
			<div className="logo-whatsapp">
				<a href="https://wa.link/v2f9lc" target="_blank">
					<BsWhatsapp className="ws-image" />
				</a>
			</div>
		</div>
	);
};

export default ButtonWs;
