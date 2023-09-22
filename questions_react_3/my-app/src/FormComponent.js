import React, {useState} from 'react'

const FormComponent = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        age: ''
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(form)
    }

    return(<>
    <form onSubmit={handleSubmit}>
       <label htmlFor='name'>名前</label>
       <input id="name" type="text" name="name" onChange={handleChange} value={form.name}/>
       <label htmlFor='email'>メールアドレス</label>
       <input id="email" type="email" name="email" onChange={handleChange} value={form.email}/>
       <label htmlFor='age'>年齢</label>
       <input type="text" name="age" onChange={handleChange} value={form.age}/>
       <button>登録</button>
    </form>
    </>)
}

export default FormComponent