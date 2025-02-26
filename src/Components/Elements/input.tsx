import { forwardRef } from "react";

interface Props {
    label: string;
    type: string;
    placeholder: string;
    htmlFor: string;
    ref: any;
    onChange?: () => void
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, htmlFor, type, placeholder, onChange }, ref) => {
    return (
        <>
            <label htmlFor={htmlFor} className='block text-slate-700 text-sm font-bold mb-2'>
                {label}
            </label>
            <input ref={ref} type={type} name={type} id={htmlFor} onChange={onChange} className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50' placeholder={placeholder} />
        </>
    )
})

export default Input;