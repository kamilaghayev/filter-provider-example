import { useState } from 'react'

import styles from './Filter.module.css'
const Filter = ({ FilterForm, menuPosition, children }) => {
	const [openFilter, setOpenFilter] = useState(false);
	const handleOpenFilter = () => setOpenFilter(true);

	const handleCloseFilter = () => setOpenFilter(false);

	return (
		<div className={[styles.filterContainer, menuPosition === 'right' && styles.reverse].join(' ')}>
			<div className={styles.workPart}>
				{children}
			</div>

			<button className={[styles.filterBtn, openFilter ? styles.close : styles.open].join(' ')} onClick={handleOpenFilter}>
				
				{/* filter icon u olacaq və bura basan zaman filterForm acilacaq */}
				{/* <FilterIcon color='white' strokeWidth='2.5' /> */}
				Open
			</button>

			<div className={[styles.filterPopupContainer, openFilter ? styles.open : styles.close].join(' ')}>
				<div className={styles.filterPopup}>
					<button className={styles.closeBtn} onClick={handleCloseFilter}>
						<span className={styles.closeIcon}>X</span>
					</button>
					<div className={styles.filterInputs}>
						{FilterForm ? FilterForm : <p>filter yoxdur</p>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filter