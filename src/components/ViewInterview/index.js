import React from 'react';

export const ViewInterview = () => {
  const isSelected = false;
  const panelName = 'Raj Thammala';
  const classes = React.useMemo(() => {
    const classNames = {
      isSelectedClass: [],
    };
    if (isSelected) {
      const idx = classNames.isSelectedClass.indexOf('rejected');
      classNames.isSelectedClass.splice(idx, 1, 'selected');
    } else {
      const idx = classNames.isSelectedClass.indexOf('selected');
      classNames.isSelectedClass.splice(idx, 1, 'rejected');
    }
    return classNames;
  }, [isSelected]);
  return (
    <div className="view_interview-wrapper">
      <div className="view_interview-container row mb-2 mb-lg-5">
        <section className="col-12 col-lg-7 me-4 mb-3 mb-lg-0">
          <span className="view_interview-online-circle"></span>
          <video src="" controls className="interview-video"></video>
        </section>
        <section className="col interview-details p-lg-4 p-2">
          <div className="bold-text">Panel Feedback</div>
          <div className="bold-text">
            Rating - <span className={classes.isSelectedClass.join(' ')}>{isSelected ? 'Selected' : 'Rejected'} </span>
            <span>
              {isSelected ? <i class="fas fa-check-circle check-icon"></i> : <i class="fas fa-times-circle times-icon"></i>}
            </span>
          </div>
          <div className="bold-text">Skills - React, Nodejs</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi non, explicabo quisquam ullam
            deleniti, similique soluta inventore cupiditate asperiores facilis ad, autem consequatur? Amet numquam ipsam
            obcaecati voluptas quisquam.
          </p>
          <span>Panel Name - {panelName}</span>
          <div className="mt-3">
            <button className="btn btn-secondary">
              <span>
                <i className="fas fa-check-circle check-icon"></i>
              </span>{' '}
              View your Resume
            </button>
          </div>
        </section>
      </div>
      <div className="back-next-btn-wrapper row">
        <div className="col-7 text-start text-lg-center">
          <span className="me-2 me-lg-5">
            <i className="fas fa-chevron-circle-left back-icon"></i>
          </span>
          <span>
            <i className="fas fa-chevron-circle-right next-icon"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
