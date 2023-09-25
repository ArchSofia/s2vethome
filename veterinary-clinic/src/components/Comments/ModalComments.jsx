import React, { useState } from "react";
import CommentCard from "./CommentCard";
import dataComments from "../Comments/DataComments.json";


const ModalComments = () => {

	return (
		<>
			<div className="ctn-modal">
				<CommentCard
					dataComments={dataComments}
				/>
			</div>
		</>
	);
};

export default ModalComments;
