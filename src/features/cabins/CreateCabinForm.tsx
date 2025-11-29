import styles from './CreateCabinForm.module.scss'

function CreateCabinForm() {
  return (
    <form className={styles.form}>
      {/* 1. Cabin Name */}
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="name">
          Cabin name
        </label>
        <input type="text" id="name" className={styles.input} />
      </div>

      {/* 2. Max Capacity */}
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="maxCapacity">
          Maximum capacity
        </label>
        <input type="number" id="maxCapacity" className={styles.input} />
      </div>

      {/* 3. Regular Price */}
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="regularPrice">
          Regular price
        </label>
        <input type="number" id="regularPrice" className={styles.input} />
      </div>

      {/* 4. Discount */}
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="discount">
          Discount
        </label>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          className={styles.input}
        />
      </div>

      {/* 5. Description (Textarea) */}
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="description">
          Description for website
        </label>
        <textarea id="description" className={styles.textarea} />
      </div>

      {/* 6. Image Upload */}
      <div className={styles.formRow}>
        <label className={styles.label} htmlFor="image">
          Cabin photo
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className={styles.fileInput}
        />
      </div>

      {/* 7. Action Buttons */}
      <div className={styles.formRow}>
        {/* 'type="reset"' automatically clears standard HTML inputs */}
        <button className={`${styles.button} ${styles.secondary}`} type="reset">
          Cancel
        </button>
        <button className={`${styles.button} ${styles.primary}`}>
          Create new cabin
        </button>
      </div>
    </form>
  )
}

export default CreateCabinForm
