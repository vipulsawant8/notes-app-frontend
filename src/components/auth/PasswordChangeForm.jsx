import * as yup from "yup";
import CustomForm from "@/components/form/CustomForm.jsx";
import { forwardRef } from "react";

const PasswordChange = forwardRef(({ onSubmit, onError, loading }, ref) => {
    
    const fields = [
            {
                name: "oldPassword",
                label: "Old Password",
                type: "password",
                autoComplete: "new-password"
            },
            {
                name: "newPassword",
                label: "New Password",
                type: "password",
                autoComplete: "new-password"
            }
        ];
    
    const schema = yup.object({
        oldPassword: yup.string().required(),
        newPassword: yup.string().min(6).required()
    });
    
    return ( <CustomForm 
        ref={ref}
        fields={fields}
        validationSchema={schema}
        submitLabel={loading ? "Changing..." : "Change"}
        onSubmit={onSubmit}
        onError={onError}
        name="PaswordChangeForm" /> );
});

export default PasswordChange;