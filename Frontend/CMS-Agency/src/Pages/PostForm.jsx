import styles from "./PostForm.module.css";
 
function PostForm() {
  return (
    <div className="row g-4">
 
      {/* ── Left Column ── */}
      <div className="col-12 col-lg-8">
        <div className={styles.card}>
 
          {/* Page header */}
          <div className={styles.pageHeader}>
            <div className={styles.pageHeaderIcon}>
              <i className="fa-solid fa-pen-nib"></i>
            </div>
            <div>
              <h4 className={styles.pageTitle}>Create New Post</h4>
              <p className={styles.pageSubtitle}>
                Fill in the details below to publish a new post.
              </p>
            </div>
          </div>
 
          <div className={styles.cardDivider}></div>
 
          {/* Post Title */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Post Title
              <span className={styles.required}> *</span>
            </label>
            <div className={styles.inputWrapper}>
              <i className={`${styles.inputIcon}`}></i>
              <input
                type="text"
                className={`form-control ${styles.inputField}`}
                placeholder="Enter a compelling title..."
              />
            </div>
          </div>
 
          {/* Post Content */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Post Content
              <span className={styles.required}> *</span>
            </label>
            <textarea
              className={`form-control ${styles.textareaField}`}
              placeholder="Write your post content here..."
              rows={11}
            ></textarea>
           
          </div>
 
        </div>
      </div>
 
      {/* ── Right Column ── */}
      <div className="col-12 col-lg-4">
 
        {/* Publish Settings */}
        <div className={styles.card}>
          <div className={styles.sideCardHeader}>
            <i className={`fa-solid fa-sliders ${styles.sideCardIcon}`}></i>
            <span className={styles.sideCardTitle}>Publish Settings</span>
          </div>
 
          <div className={styles.cardDivider}></div>
 
          {/* Status */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Status</label>
            <div className={styles.selectWrapper}>
              <i className={` ${styles.selectIcon}`}></i>
              <select className={`form-select ${styles.selectField}`}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
 
          {/* Category */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>
              Category
              <span className={styles.required}> *</span>
            </label>
            <div className={styles.selectWrapper}>
              <i className={` ${styles.selectIcon}`}></i>
              <select className={`form-select ${styles.selectField}`}>
                <option value="">-- Select a category --</option>
                <option value="SUV Cars">SUV Cars</option>
                <option value="Sports Cars">Sports Cars</option>
                <option value="Sedan Cars">Sedan Cars</option>
              </select>
            </div>
          </div>
 
          {/* Add Category */}
          <button className={`btn w-100 mb-3 ${styles.addCategoryBtn}`}>
            <i className="fa-solid fa-circle-plus"></i>
            Add New Category
          </button>
 
          {/* Publish */}
          <button className={`btn w-100 ${styles.publishBtn}`}>
            <i className="fa-solid fa-paper-plane"></i>
            Publish Post
          </button>
        </div>
 
        {/* Featured Image */}
        <div className={`${styles.card} mt-4`}>
          <div className={styles.sideCardHeader}>
            <i className={`fa-solid fa-image ${styles.sideCardIcon}`}></i>
            <span className={styles.sideCardTitle}>Featured Image</span>
          </div>
 
          <div className={styles.cardDivider}></div>
 
          <div className={styles.uploadBox}>
            <i className={`fa-solid fa-cloud-arrow-up ${styles.uploadIcon}`}></i>
            <p className={styles.uploadText}>click to upload</p>
            <p className={styles.uploadHint}>JPG, PNG, GIF — max 5MB</p>
            <input
              type="file"
              className={styles.fileInputHidden}
              accept=".jpg,.png,.gif,.webp"
              id="featuredImage"
            />
            <label htmlFor="featuredImage" className={`btn ${styles.chooseFileBtn}`}>
              <i className="fa-solid fa-folder-open"></i>
              Choose File
            </label>
          </div>
        </div>
 
      </div>
    </div>
  );
}
 
export default PostForm;