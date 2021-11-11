import React from 'react'
import Card from '../Card/Card'

import styles from './UserList.module.css'

export default function UserList() {
    return (
        <div className={styles.UserList} >
            {/* ok */}
            <Card/>
            <Card/>
            {/* ok */}
        </div>
    )
}
