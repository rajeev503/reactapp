import React from 'react';
import Button from '../UI/Button';

import styles from './FormInput.module.css';


export default function FormInput() {
    return (
       <form>
           <div className={styles["form-control"]} >
           <label>Username:</label>
           <input type="text" />
           <label>Age(Years):</label>
           <input type="text"/>

           <Button type='submit'>Add User</Button>
           </div>
       </form>
    )
}
