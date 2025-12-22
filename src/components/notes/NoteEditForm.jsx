import * as yup from "yup";
import { forwardRef } from "react";

import { useDispatch } from "react-redux";

import { CustomForm } from "@/components/form";
import { updateNote } from "@/app/features/notes/noteSlice.js";

const NoteEditForm = forwardRef(({ note, onSave }, ref) => {

	const dispatch = useDispatch();

	const noteFields = [
		{
			name: "title",
			label: "Title",
			type: "text",
		},
		{
			name: "content",
			label: "Content",
			type: "textarea"
		},
		{
			name: "pinned",
			label: "Pin?",
			type: "checkbox"
		}
	];

	const noteSchema = yup.object({
		title: yup.string().required("Title is required"),
		content: yup.string(),
		pinned: yup.boolean()
	});

	const handleSave = async (data) => {

		try {
			await dispatch(updateNote({ id: note._id, title: data.title, content: data.content, pinned: data.pinned })).unwrap();
			ref.current.resetForm();
			onSave();
		} catch (error) {
			
			window.alert(error || "Update failed. Please try again.");
		}
	};

	const handleError = errors => {

		console.log("Note Column Errors :", errors);
	};

	return ( <CustomForm ref={ref} fields={noteFields} validationSchema={noteSchema} onSubmit={handleSave} onError={handleError} defaultValues={{ title: note.title, content: note.content, pinned: note.pinned }} submitLabel="Save" name="EditNote" submitInside={false} />)
	
} );

export default NoteEditForm;