// $ این کامپوننت میاد و واسمون اینپوت درست میکنه و توی کورس فرم ایمپورتش میکنیم

export default function TextInput({name , label ,onChange, value}){
    return(
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
            <div className="field">
            <input
                id={name}
                type="text"
                name={name}
                className="form-control"
                value={value}
                onChange={onChange}
                />
            </div>
        </div>
    )
} 