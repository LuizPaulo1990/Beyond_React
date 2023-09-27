import {useState, useEffect} from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function ProjectForm({buttonText}) {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers:{
                'content-type': 'aplication/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <form className={styles.form}>
            <Input
                type='text'
                text='project name'
                name='name'
                placeholder='Enter project name'
            />
            <Input
                type='number'
                text='total budget'
                name='name'
                placeholder='Enter total budget'
            />
           <Select name='category_id' text='Select the category'  options ={categories}/>
           <SubmitButton text={buttonText}/>
        </form>
    )
}

export default ProjectForm;