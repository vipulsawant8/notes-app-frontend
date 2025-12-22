import { Button } from "react-bootstrap";

const NoteHeader = ({ title, pinned, onEdit, onDelete }) => {

	const linkStyle = {
		textDecoration: "none"
	};
	
	return (<div className="d-flex justify-content-between align-items-center mb-3">
		<span className="fw-bold text-truncate"> { title } </span>
		<span className="fw-bold text-truncate"> { pinned ? "pinned" : "" } </span>
		
		<div className="d-flex gap-1">
			<Button variant="link" 
				className="mb-3 btn-icon edit-btn" 
				size="sm"
				onClick={onEdit}
				style={linkStyle}
			> 
				✎
			</Button>
			<Button 
				variant="link" 
				className="mb-3 btn-icon x-btn" 
				size="sm" 
				onClick={onDelete}
				style={linkStyle}
			> 
				X 
			</Button>
		</div>
	</div>);
};

export default NoteHeader;