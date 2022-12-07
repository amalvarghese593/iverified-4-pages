import React from 'react';

export const LiveInterview = () => {
  const jobId = 'Test job';
  const title = 'Senior tester';
  const isMic = false;
  const isCall = true;
  const isVideo = false;
  const classes = React.useMemo(() => {
    const classNames = {
      callClass: [],
      camClass: [],
    };
    if (isCall) {
      const idx = classNames.callClass.indexOf('reject');
      classNames.callClass.splice(idx, 1, 'select');
    } else {
      const idx = classNames.callClass.indexOf('select');
      classNames.callClass.splice(idx, 1, 'reject');
    }
    if (isVideo) {
      const idx = classNames.camClass.indexOf('reject');
      classNames.camClass.splice(idx, 1, 'select');
    } else {
      const idx = classNames.camClass.indexOf('select');
      classNames.camClass.splice(idx, 1, 'reject');
    }
    return classNames;
  }, [isCall, isVideo]);
  return (
    <>
      <div className="view_interview-wrapper">
        <div className="view_interview-container row mb-2 mb-lg-5">
          <section className="col-12 col-lg-7 me-4 mb-3 mb-lg-0">
            <span className="view_interview-online-circle"></span>
            <video src="" controls className="interview-video"></video>
            <div className="video-call-btn-container">
              <span className={classes.camClass.join(' ')}>
                <i class="fas fa-video"></i>
              </span>
              <span className={classes.callClass.join(' ')}>
                {isCall ? <i class="fas fa-phone"></i> : <i class="fas fa-phone-slash"></i>}
              </span>
              <span className="mic">
                {isMic ? <i class="fas fa-microphone"></i> : <i class="fas fa-microphone-slash"></i>}
              </span>
            </div>
          </section>
          <section className="col interview-details p-lg-4 p-2">
            <div className="bold-text">Job ID - {jobId}</div>
            <div className="bold-text">
              <span>Title - {title}</span>
            </div>
            <div className="bold-text">Skills - React, Nodejs</div>
            <div className="bold-text">Summary</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi non, explicabo quisquam ullam
              deleniti, similique soluta inventore cupiditate asperiores facilis ad, autem consequatur? Amet numquam ipsam
              obcaecati voluptas quisquam.
            </p>
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
        <div className="help-message-container text-start">
          <span>
            <i class="fas fa-exclamation-circle"></i>
          </span>{' '}
          Incase of any technical issues in the interview please reach out to FirstConnect Solutions for further process.
        </div>
      </div>
    </>
  );
};
