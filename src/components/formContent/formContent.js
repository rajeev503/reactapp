import React from 'react';
import FormInput from '../FormInput/FormInput';

//using css modules
//you need to configure it
//but you create react app 
// it is already configured

import styles from './formcontent.module.css';

export default function FormContent() {
    return (
        <div className={styles["Form-Control"]} >
            <FormInput/>
        </div>
    )
}
