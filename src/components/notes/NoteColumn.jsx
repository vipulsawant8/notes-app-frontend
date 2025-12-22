import { useState, useRef, memo } from "react";
import { Button, Card, CardBody, CardHeader } from "react-bootstrap";

import { NoteHeader, NoteEditForm, NoteDeleteModal } from '@/components/notes';

const NoteColumn = ({ note }) => {

	const editNoteRef = useRef();
	
	const [editing, setEditing] = useState(false);
	const [deleting, setDeleting] = useState(false);

	const onEdit = () => {

		setEditing(true);
	};

	const onHideEdit = () => {

		setEditing(false);
	};

	const onDelete = () => {

		setDeleting(true);
	};
	
	const onHideDelete = () => {

		setDeleting(false);
	};

	return (
		
		<Card className="kanban-list">
			
			<NoteDeleteModal show={deleting} onHide={onHideDelete} note={note}  />

			<CardBody className="kanban-list-header p-2">
				
				{ !editing && ( <NoteHeader 
						title={note.title}
						pinned={note.pinned} 
						onEdit={onEdit} 
						onDelete={onDelete} 
					/> ) }

				{ editing && ( 
					<div className="d-flex align-items-end">
					
						<NoteEditForm 
							ref ={editNoteRef}
							note={note}
							onSave={onHideEdit}
						/>
						<Button variant="link" className="btn-icon x-btn" onClick={onHideEdit} style={{textDecoration: "none"}}> X </Button>
					</div> 
				) }
			</CardBody>
		</Card>
	);
};

export default memo(NoteColumn);