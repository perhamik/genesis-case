'use client'

import React from 'react'

import {useTheme} from '@/src/processes/theme'

import styles from './ThemeToggle.module.scss'

export const ThemeToggle = () => {
	const {togglerRef, toggleTheme} = useTheme()

	return (
		<label className={styles.toggle}>
			<input
				ref={togglerRef}
				type="checkbox"
				className={styles.toggle__input}
				onChange={() => toggleTheme()}
			/>
			<span className={styles.toggle__check}></span>
		</label>
	)
}
